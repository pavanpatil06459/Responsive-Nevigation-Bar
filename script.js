// ── ELEMENT REFS ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// ── HAMBURGER TOGGLE ──
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// ── CLOSE MENU ON OUTSIDE CLICK ──
document.addEventListener('click', (e) => {
  if (
    !hamburger.contains(e.target) &&
    !mobileMenu.contains(e.target) &&
    mobileMenu.classList.contains('open')
  ) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
  }
});

// ── CLOSE MENU ON ESC ──
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('aria-hidden', true);
    hamburger.focus();
  }
});

// ── ACTIVE LINK HIGHLIGHT ──
// Works across both desktop and mobile nav links
const allLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

allLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the href to sync both desktop + mobile
    const href = link.getAttribute('href');

    // Remove active from all links
    allLinks.forEach(l => l.classList.remove('active'));

    // Set active on all links that share the same href
    document.querySelectorAll(`a[href="${href}"]`).forEach(l => {
      l.classList.add('active');
    });

    // Close mobile menu after link click
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
    }
  });
});

// ── STICKY NAV SHADOW ON SCROLL ──
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.12)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});
