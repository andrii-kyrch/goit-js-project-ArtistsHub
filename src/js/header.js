const refs = {
  menu: document.querySelector('.menu'),
  openMenuBtn: document.querySelector('.open-menu-btn'),
  closeMenuBtn: document.querySelector('.close-menu-btn'),
};

refs.openMenuBtn.addEventListener('click', () => {
  refs.menu.classList.add('is-open');
  refs.openMenuBtn.classList.add('active');
  refs.closeMenuBtn.classList.add('active');
});

refs.closeMenuBtn.addEventListener('click', () => {
  refs.menu.classList.remove('is-open');
  refs.openMenuBtn.classList.remove('active');
  refs.closeMenuBtn.classList.remove('active');
});
