const refs = {
  openMenuBtn: document.querySelector('.open-menu-btn'),
  closeMenuBtn: document.querySelector('.close-menu-btn'),
  menu: document.querySelector('.menu'),
};

function toggleMenu(isOpen) {
  refs.menu.classList.toggle('is-open', isOpen);
  refs.openMenuBtn.classList.toggle('active');
  refs.closeMenuBtn.classList.toggle('active', isOpen);
}

refs.openMenuBtn.addEventListener('click', () => toggleMenu(true));
refs.closeMenuBtn.addEventListener('click', () => toggleMenu(false));
