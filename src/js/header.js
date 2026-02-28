import { refs } from './refs.js';

refs.mobileMenuOpenBtn.addEventListener('click', () => {
  refs.mobileMenu.classList.add('is-open');
  document.body.classList.add('modal-open');
});

refs.mobileMenuCloseBtn.addEventListener('click', () => {
  refs.mobileMenu.classList.remove('is-open');
  document.body.classList.remove('modal-open');
});

refs.mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    refs.mobileMenu.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  });
});
