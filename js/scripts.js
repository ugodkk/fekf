// scripts.js: Carrega menu.html e ativa menu top expand FEKF
function loadMenu() {
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;
        initTopExpandMenu();
      });
  }
}
function initTopExpandMenu() {
  const trigger = document.querySelector('.fekf-menu-trigger');
  const menu = document.querySelector('.fekf-topnav-menu');
  if (trigger && menu) {
    trigger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      trigger.classList.toggle('active', isOpen);
      trigger.setAttribute('aria-expanded', isOpen);
    });
    // Fecha menu ao clicar em link (mobile)
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 900 && menu.classList.contains('open')) {
          menu.classList.remove('open');
          trigger.classList.remove('active');
          trigger.setAttribute('aria-expanded', false);
        }
      });
    });
    // Fecha menu com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', false);
      }
    });
  }
}
// Fade-in animado no conteúdo principal
function fadeInMainContent() {
  const main = document.querySelector('.main-content');
  if (main) {
    main.classList.add('fade-in');
  }
}
// Alternância de modo escuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('fekf-dark', document.body.classList.contains('dark-mode'));
}
function setupDarkModeButton() {
  let btn = document.getElementById('darkmode-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'darkmode-btn';
    btn.title = 'Alternar modo escuro/claro';
    btn.innerHTML = '🌙';
    btn.className = 'darkmode-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Alternar modo escuro');
    document.body.appendChild(btn);
  }
  btn.onclick = toggleDarkMode;
}
function applySavedDarkMode() {
  if (localStorage.getItem('fekf-dark') === 'true') {
    document.body.classList.add('dark-mode');
  }
}
document.addEventListener('DOMContentLoaded', function() {
  loadMenu();
  fadeInMainContent();
  setupDarkModeButton();
  applySavedDarkMode();
});
