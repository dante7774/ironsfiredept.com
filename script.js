/* DETECT SCROLL AND DISPLAY HEADER BACKGROUND */
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollThreshold = 40; // Example - adjust this value

  if (window.scrollY >= scrollThreshold) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});


/* HAMBURGER MENU */
const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeButton = document.querySelector('.close-menu');

hamburgerButton.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
  mobileNav.classList.remove('open'); 
});
