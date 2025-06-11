// scripts.js: Carrega menu.html e ativa menu top expand FEKF
function loadMenu() {
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;
        initTopExpandMenuCodrops();
      });
  }
}
function initTopExpandMenuCodrops() {
  const menuWrap = document.querySelector('.fekf-menu-wrap');
  const menuBtn = document.getElementById('fekf-open-button');
  const menuList = document.getElementById('fekf-menu-list');
  if (menuWrap && menuBtn && menuList) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuWrap.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        menuList.focus();
      }
    });
    // Fecha menu com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuWrap.classList.contains('open')) {
        menuWrap.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', false);
        menuBtn.focus();
      }
    });
    // Fecha menu ao clicar em link (mobile)
    menuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 900 && menuWrap.classList.contains('open')) {
          menuWrap.classList.remove('open');
          menuBtn.classList.remove('active');
          menuBtn.setAttribute('aria-expanded', false);
        }
      });
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
