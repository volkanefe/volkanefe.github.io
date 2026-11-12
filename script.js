const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const selectTab = (course) => {
  document.querySelectorAll('.tab').forEach((tab) => {
    const active = tab.dataset.tab === course;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  document.querySelectorAll('.curriculum-panel').forEach((panel) => {
    const active = panel.dataset.panel === course;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });
};

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => selectTab(tab.dataset.tab));
});

document.querySelectorAll('[data-select-course]').forEach((link) => {
  link.addEventListener('click', () => selectTab(link.dataset.selectCourse));
});

window.addEventListener('scroll', () => {
  document.querySelector('.site-header').classList.toggle('scrolled', window.scrollY > 8);
});

const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
