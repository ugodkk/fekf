// scripts.js: JavaScript para funcionalidades do site institucional
// Carrega o menu.html em todas as páginas
function loadMenu() {
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer) {
    fetch('menu.html')
      .then(response => response.text())
      .then(html => {
        menuContainer.innerHTML = html;
        initMenuToggle();
      });
  }
}
// Função para abrir/fechar menu hambúrguer no mobile
function initMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}
document.addEventListener('DOMContentLoaded', loadMenu);
