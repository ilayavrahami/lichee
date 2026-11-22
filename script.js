const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const body = document.body;

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  body.classList.remove('menu-open');
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
    body.classList.toggle('menu-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) closeMenu();
  });
}

const glow = document.querySelector('.cursor-glow');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (glow && finePointer.matches && !reducedMotion.matches) {
  let frame = 0;
  window.addEventListener('pointermove', (event) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      frame = 0;
    });
  }, { passive: true });
}

const revealItems = document.querySelectorAll('.reveal');
if (revealItems.length && !reducedMotion.matches && 'IntersectionObserver' in window) {
  body.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
