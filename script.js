const overlayLinks = document.querySelectorAll('.overlay-links a');
const overlayLandingBtn = document.querySelector('.overlay-landing-btn');
const overlay = document.getElementById('mobile-overlay');
const overlayClose = document.getElementById('overlay-close');
const navToggle = document.getElementById('nav-toggle');

// Open overlay
navToggle.addEventListener('click', () => {
  overlay.classList.add('active');
});

// Close overlay via X
overlayClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// Close overlay when any link is clicked
overlayLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});

// Close overlay when landing image is clicked
overlayLandingBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});
