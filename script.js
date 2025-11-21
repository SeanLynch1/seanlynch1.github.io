// Existing overlay toggle (hamburger)
const navToggle = document.getElementById('nav-toggle');
const overlay = document.getElementById('mobile-overlay');
const overlayClose = document.getElementById('overlay-close');

navToggle.addEventListener('click', () => {
  overlay.classList.add('active');
});

overlayClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// NEW: close overlay when any link inside it is clicked
const overlayLinks = document.querySelectorAll('.overlay-links a');

overlayLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('active'); // closes overlay
  });
});
