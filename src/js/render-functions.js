import iconsPath from '../img/icons.svg?url';

const refs = {
  artistsContainer: document.querySelector('.artists-list'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  feedbacksContainer: document.querySelector('.swiper-wrapper'),
};

function artistTemplate(artist) {
  const { _id, strArtist, strArtistThumb, strBiographyEN, genres } = artist;
  const genresMarkup = genres
    .map(genre => {
      return `<li class="artist-genres-item">${genre}</li>`;
    })
    .join('');
  return `<li class="artists-item">
        <img
          src="${strArtistThumb}"
          alt="Artist ${strArtist}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${genresMarkup}
        </ul>
        <h3 class="artist-name">${strArtist}</h3>
        <p class="artist-text">
          ${strBiographyEN.split(' ').slice(0, 10).join(' ')} ...
        </p>
        <button class="artist-btn" data-id="${_id}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${iconsPath}#caret-right"></use>
          </svg>
        </button>
      </li>`;
}

export function createArtistsList(artists) {
  const markup = artists.map(artistTemplate).join('');
  refs.artistsContainer.insertAdjacentHTML('beforeend', markup);
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

export function updateLoadMoreVisibility(currentPage, maxPage) {
  if (currentPage < maxPage) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
  }
}

function feedbacksTemplate(feedback) {
  const { name, descr, rating } = feedback;
  console.log(rating, Math.round(rating));

  return `<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(
      rating
    )} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${iconsPath}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${iconsPath}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${iconsPath}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${iconsPath}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${iconsPath}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${iconsPath}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${iconsPath}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${iconsPath}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${iconsPath}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${iconsPath}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${iconsPath}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${iconsPath}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${iconsPath}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${iconsPath}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${iconsPath}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${descr}"</p>
    <p class="feedback-author-name">${name}</p>
  </div>
</div>`;
}

export function createFeedbacks(feedbacks) {
  const markup = feedbacks.map(feedbacksTemplate).join('');
  refs.feedbacksContainer.innerHTML = markup;
}
