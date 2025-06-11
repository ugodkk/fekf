// scripts.js: Carrega menu.html e ativa menu hambúrguer FEKF
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
function initMenuToggle() {
  const toggle = document.querySelector('.fekf-menu-toggle');
  const navLinks = document.querySelector('.fekf-nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
}
document.addEventListener('DOMContentLoaded', loadMenu);
