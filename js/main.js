const menuList = document.querySelector('.nav__ul');
const menuHamburger = document.querySelector('.header__button');
const firstLine = document.querySelector('.header__div--first');
const secondLine = document.querySelector('.header__div--second');
const thridLine = document.querySelector('.header__div--third');

menuHamburger.addEventListener('click', animateLines);


function animateLines() {
    firstLine.classList.toggle('activeheader__div--first');
    secondLine.classList.toggle('activeheader__div--second');
    thridLine.classList.toggle('activeheader__div--third');
}

menuHamburger.addEventListener('click', function() {
    menuList.classList.toggle('nav__ul--show')
})