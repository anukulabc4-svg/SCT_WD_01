// Toggle scrolled class on navbar when user scrolls
(() => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function onScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // mobile menu toggle
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // close mobile menu when link clicked
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });

  // init
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
