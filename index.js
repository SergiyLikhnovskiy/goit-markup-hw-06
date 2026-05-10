const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCloseBtn = document.querySelector('.menu-close-btn')
const backdrop = document.querySelector('.backdrop')
const heroBtn = document.querySelector('.hero-button')
const closeBtn = document.querySelector('.button-close')

burgerBtn.addEventListener('click', () => {
    togglemobileMenu();
});
 
menuCloseBtn.addEventListener('click', () => {
    togglemobileMenu();
});
 
closeBtn.addEventListener('click', () => {
    togglebackdrop();
});
 




heroBtn.addEventListener('click', () => {
   togglebackdrop();
});





function togglemobileMenu(params) {
    mobileMenu.classList.toggle('is-open')
}

function togglebackdrop(params) {
    backdrop.classList.toggle('is-open')
}
