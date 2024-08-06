const burger = document.querySelector('.menu__burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

const openNav = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_opened');
        burger.classList.toggle('menu__burger_opened');

        if (burger.classList.contains('menu__burger_opened')) {
            body.style.overflow = 'hidden';
        }  else {
            body.style.overflow = 'scroll';
        }
    });
};

const closeMenuOnResize = () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1599) {
            nav.classList.remove('nav_opened');
            burger.classList.remove('menu__burger_opened');
            body.style.overflow = 'scroll';
        }
      });
}

openNav();
closeMenuOnResize();
