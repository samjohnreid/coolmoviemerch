// Functionality for mobile nav menu
// TODO: use event delegation for event listeners
const hamburger = document.querySelector('.masthead__hamburger');
const navMenu = document.querySelector('.masthead__nav');
const toggleMenu = () => {
  navMenu.classList.toggle('masthead__nav--active');
}
hamburger.addEventListener('click', toggleMenu);