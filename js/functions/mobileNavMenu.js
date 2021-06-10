const mobileNavMenu = () => {
  const navMenu = document.querySelector('.masthead__nav');
  const toggleMenu = () => {
    navMenu.classList.toggle('masthead__nav--active');
  };

  document.addEventListener('click', (event) => {
    if (!event.target.matches('.masthead__hamburger')) return;
    toggleMenu();
  });
};

export default mobileNavMenu;