import { refs } from './refs';
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

  const { paginationDotFirst, paginationDotMiddle, paginationDotLast } = refs;

  paginationDotFirst.classList.remove('active');
  paginationDotMiddle.classList.remove('active');
  paginationDotLast.classList.remove('active');

  if (currentIndex === 0) {
    setActiveDot(paginationDotFirst);
  } else if (currentIndex === totalSlides - 1) {
    setActiveDot(paginationDotLast);
  } else {
    setActiveDot(paginationDotMiddle);
  }
}

function setActiveDot(dot) {
  dot.classList.remove('active');
  void dot.offsetWidth;
  dot.classList.add('active');
}
