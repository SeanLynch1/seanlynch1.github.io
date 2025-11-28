const overlayLinks = document.querySelectorAll('.overlay-links a');
const overlayLandingBtn = document.querySelector('.overlay-landing-btn');
const overlay = document.getElementById('mobile-overlay');
const overlayClose = document.getElementById('overlay-close');
const navToggle = document.getElementById('nav-toggle');

let clickCount = 0;

const headshot = document.getElementById('headshot');
const secretWrapper = document.getElementById('secret-wrapper');

// REMOVE THIS – it forces the bubble to always show
// document.getElementById('secret-wrapper').style.display = 'block';

headshot.addEventListener('click', () => {
  clickCount++;

  // Pulse feedback
  headshot.classList.add('clicked');
  setTimeout(() => headshot.classList.remove('clicked'), 100);

  if (clickCount === 5) {

    // Show the entire wrapper (bubble + text)
    secretWrapper.style.display = 'block';

    setTimeout(() => {
      secretWrapper.style.display = 'none';
      clickCount = 0;
    }, 4000);
  }
});


// Select all skill tiles
document.querySelectorAll('.skill-tile').forEach(tile => {
  const inner = tile.querySelector('.skill-tile-inner');

  // Click toggles the flipped state immediately
  inner.addEventListener('click', () => {
    inner.classList.toggle('flipped');
  });

  // Mouse leave flips it back if it is flipped
  tile.addEventListener('mouseleave', () => {
    if (inner.classList.contains('flipped')) {
      inner.classList.remove('flipped');
    }
  });
});


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
