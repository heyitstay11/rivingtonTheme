let container = document.getElementsByClassName('slide-container')[0];
let imgs = document.querySelectorAll('.slide img');
let left = document.getElementsByClassName('arrow-left')[0];
let right = document.getElementsByClassName('arrow-right')[0];
let gallery = document.querySelectorAll('.grid-item img') ;
let pop = document.querySelector('.pop');
let modal = document.querySelector('.modal');

let current = 0;

left.addEventListener('click', () => {
    current--;
    if(current < 0) current = imgs.length - 1 ;
    moveSlider();
})

right.addEventListener('click', () => {
    current++;
    if(current == imgs.length) current = 0;
    moveSlider();
})

function moveSlider(){
    container.style.transform = `translateX(${-current * 100}%)`;
}

gallery.forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.add('open');
        pop.classList.add('open');
        pop.src = image.getAttribute('data-src');
    })
})

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        pop.classList.remove('open');
    }
})