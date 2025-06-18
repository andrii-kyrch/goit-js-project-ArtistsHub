import iconsPath from '../img/icons.svg?url';

const refs = {
  artistsContainer: document.querySelector('.artists-list'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  feedbacksContainer: document.querySelector('.swiper-wrapper'),
  artistDetailsContainer: document.querySelector('.artist-details-info'),
};

function artistGenresTemplate(genres) {
  return genres
    .map(genre => `<li class="artist-genres-item">${genre}</li>`)
    .join('');
}

function artistTemplate(artist) {
  const { _id, strArtist, strArtistThumb, strBiographyEN, genres } = artist;

  const genresMarkup = artistGenresTemplate(genres);

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
        <button class="artist-btn" data-artist-id="${_id}">
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

function artistDetailsTemplate(artist) {
  const {
    strArtist,
    strArtistThumb,
    intFormedYear,
    intDiedYear,
    strGender,
    intMembers,
    strCountry,
    strBiographyEN,
    genres,
  } = artist;

  const genresMarkup = artistGenresTemplate(genres);

  return `<h2 class="artist-details-name">${strArtist}</h2>
        <img
          class="artist-photo-details"
          src="${strArtistThumb}"
          alt=""
        />
        <ul class="artist-details-list">
          <li class="artist-details-item">
            <p class="artist-details-label">Years active</p>
            <p class="artist-details-value">${intFormedYear}–${
    intDiedYear || 'present'
  }</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Sex</p>
            <p class="artist-details-value">${strGender}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Members</p>
            <p class="artist-details-value">${intMembers}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Country</p>
            <p class="artist-details-value">${strCountry}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Biography</p>
            <p class="artist-details-value">${strBiographyEN}</p>
          </li>
          <li class="artist-details-item">
            <ul class="artist-genres-list">${genresMarkup}</ul>
          </li>
        </ul>`;
}

export function createArtistDetails(artistInfo) {
  const markup = artistDetailsTemplate(artistInfo);
  refs.artistDetailsContainer.innerHTML = markup;
}
