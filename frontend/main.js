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
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const sending = { 'zh-TW': '傳送中...', 'zh-CN': '传送中...', 'en': 'Sending...' };
  const sent = { 'zh-TW': '已送出！我們將盡快回覆您', 'zh-CN': '已送出！我们将尽快回复您', 'en': 'Sent! We\'ll reply soon.' };
  const failed = { 'zh-TW': '送出失敗，請稍後再試', 'zh-CN': '送出失败，请稍后再试', 'en': 'Failed, please try again.' };

  btn.textContent = sending[currentLang] || sending['zh-TW'];
  btn.disabled = true;

  const form = e.target;
  const data = {
    name: form.name.value,
    company: form.company.value,
    email: form.email.value,
    product: form.product.value,
    message: form.message.value,
  };

  try {
    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();
    btn.textContent = sent[currentLang] || sent['zh-TW'];
    btn.style.background = '#16a34a';
    form.reset();
  } catch {
    btn.textContent = failed[currentLang] || failed['zh-TW'];
    btn.style.background = '#dc2626';
    btn.disabled = false;
  }
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

// Product tabs
document.querySelectorAll('.ptab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.ptab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById('tab-' + btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});
