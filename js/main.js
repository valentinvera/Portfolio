const header = document.querySelector('.header');
const menuList = document.querySelector('.nav__ul');
const links = document.querySelectorAll('.nav__a');
const menuHamburger = document.querySelector('.header__button');
const firstLine = document.querySelector('.header__div--first');
const secondLine = document.querySelector('.header__div--second');
const thirdLine = document.querySelector('.header__div--third');

menuHamburger.addEventListener('click', () => {
    firstLine.classList.toggle('activeheader__div--first');
    secondLine.classList.toggle('activeheader__div--second');
    thirdLine.classList.toggle('activeheader__div--third');
    menuList.classList.toggle('nav__ul--show');
});

links.forEach((links) => {
    links.addEventListener('click', () => {
        menuList.classList.remove('nav__ul--show');
        firstLine.classList.remove('activeheader__div--first');
        secondLine.classList.remove('activeheader__div--second');
        thirdLine.classList.remove('activeheader__div--third');
    })
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})