let slider = document.querySelector('.slider');
let sliderLine = document.querySelector('.slider-line');
let arrowLeft = document.querySelector('.prev');
let arrowRight = document.querySelector('.next');
let zero = 0;
let cart = document.querySelector('.cart')
let w;


arrowLeft.addEventListener('click', () => {
    zero -= 380;
    if (zero < 0) {
        zero = 760;
    }
    document.querySelector('.slider-inner').style.left = -zero + 'px'
})

arrowRight.addEventListener('click', () => {
    zero += 380;
    if (zero > 760) {
        zero = 0;
    }
    document.querySelector('.slider-inner').style.left = -zero + 'px'
})

// function init() {
//     w = document.querySelector('.slider-window').offsetWidth;
//     document.querySelector('.slider-inner').w * cart.length + 'px';
//     console.log(w);
//     cart.style.width = w + 'px';
//     cart.style.width = 'auto';

// }

// window.addEventListener('resize', init);
// init()

let active = document.querySelector('.active');
console.log(active);
// active.onclick = () => {
//     document.querySelector('.menu').style.bottom = '500px'
// }
active.addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('menu-active')
})

