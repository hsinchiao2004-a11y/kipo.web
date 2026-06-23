// Init i18n on load
document.addEventListener('DOMContentLoaded', initLang);

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(255,255,255,0.97)'
    : 'rgba(255,255,255,0.85)';
}, { passive: true });

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(
  '#solutions .sol-card, #technology .tb-cell, #specs .specs-table-wrap, #specs .specs-aside, .hero-metrics .metric, #contact .contact-info, #contact .contact-form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Animated temperature counter in hero
const tempVal = document.getElementById('tempVal');
if (tempVal) {
  const temps = [42.3, 41.8, 43.1, 40.9, 42.7, 41.2];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % temps.length;
    tempVal.textContent = temps[idx].toFixed(1) + '°C';
  }, 1800);
}

// Contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const sending = { 'zh-TW': '傳送中...', 'zh-CN': '传送中...', 'en': 'Sending...' };
  const sent = { 'zh-TW': '已送出！我們將盡快回覆您', 'zh-CN': '已送出！我们将尽快回复您', 'en': 'Sent! We\'ll reply soon.' };
  btn.textContent = sending[currentLang] || sending['zh-TW'];
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = sent[currentLang] || sent['zh-TW'];
    btn.style.background = '#16a34a';
    e.target.reset();
  }, 1200);
}

// Cert lightbox
function openLightbox(img) {
  const lb = document.getElementById('certLightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains('lightbox-close')) return;
  document.getElementById('certLightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
