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

// Highlight the nav link for the section in view
const sections = ['pilot', 'work', 'build', 'record', 'contact']
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = new Map(
  [...document.querySelectorAll('.nav-menu > a[href^="#"]')].map((a) => [a.getAttribute('href').slice(1), a])
);
if ('IntersectionObserver' in window) {
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
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
