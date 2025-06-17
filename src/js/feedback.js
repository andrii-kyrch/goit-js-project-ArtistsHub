import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getFeedbacks } from './sound-wave-api';
import { createFeedbacks } from './render-functions';

async function loadFeedback() {
  const { data } = await getFeedbacks();
  createFeedbacks(data);
}

loadFeedback();

const swiper = new Swiper('.swiper', {
  // Будь-які інші параметри
  modules: [Navigation, Keyboard],

  on: {
    init: updateCustomPagination,
    slideChange: updateCustomPagination,
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    768: {
      navigation: {
        nextEl: '.feedback-next-btn',
        prevEl: '.feedback-prev-btn',
      },
    },
  },
});

function updateCustomPagination(swiper) {
  const totalSlides = swiper.slides.length;
  const currentIndex = swiper.activeIndex;

  const dotFirst = document.querySelector('.dot-first');
  const dotMiddle = document.querySelector('.dot-middle');
  const dotLast = document.querySelector('.dot-last');

  // if (swiper.isBeginning) {
  if (currentIndex === 0) {
    dotFirst.classList.add('active');
  } else if (currentIndex === totalSlides - 1) {
    dotLast.classList.add('active');
  } else {
    dotMiddle.classList.add('active');
  }

  // Гарантуємо що тільки одна активна
  if (currentIndex !== 0 && currentIndex !== totalSlides - 1) {
    dotMiddle.classList.add('active');
    dotFirst.classList.remove('active');
    dotLast.classList.remove('active');
  } else {
    dotMiddle.classList.remove('active');
  }
}
