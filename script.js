const navToggle = document.getElementById('nav-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const overlayClose = document.getElementById('overlay-close');

navToggle.addEventListener('click', () => {
  mobileOverlay.classList.add('active');
});

overlayClose.addEventListener('click', () => {
  mobileOverlay.classList.remove('active');
});
