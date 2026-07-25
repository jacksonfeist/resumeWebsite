// Sticky-header hairline once the page scrolls
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Scroll-reveal
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

// Highlight the nav link for the section in view
const sections = ['work', 'services', 'experience', 'about', 'contact']
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = new Map(
  [...document.querySelectorAll('.nav-menu > a[href^="#"]')].map((a) => [a.getAttribute('href').slice(1), a])
);
const sectionIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navLinks.get(entry.target.id);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
sections.forEach((s) => sectionIO.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
