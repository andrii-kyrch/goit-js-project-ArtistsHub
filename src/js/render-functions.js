import { refs } from './refs';
import iconsPath from '../img/icons.svg?url';

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
  refs.artistsListContainer.insertAdjacentHTML('beforeend', markup);
}

export function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

export function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

export function showModalLoader() {
  refs.modalLoader.classList.remove('is-hidden');
}

export function hideModalLoader() {
  refs.modalLoader.classList.add('is-hidden');
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

function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
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
    albumsList,
  } = artist;

  const genresMarkup = artistGenresTemplate(genres);

  const albumsMarkup = albumsList
    .map(album => {
      const { strAlbum, tracks } = album;

      const tracksMarkup = tracks
        .map(track => {
          const { intDuration, movie, strTrack } = track;
          return `<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${strTrack}</td>
                  <td class="artist-modal-album-time col-2">${formatDuration(
                    intDuration
                  )}</td>
                  <td class="artist-modal-album-link col-3">
                  ${
                    movie
                      ? `<a
                      class="clip-link"
                      href="${movie}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href="${iconsPath}#youtube"></use>
                      </svg>
                    </a>`
                      : ''
                  } 
                  </td>
                </tr>`;
        })
        .join('');

      return `<li class="artist-modal-album-card">
            <table class="artist-modal-album-table">
              <caption class="artist-modal-album-name">${strAlbum}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${tracksMarkup}
              </tbody>
            </table>
          </li>`;
    })
    .join('');

  return `<h2 class="artist-modal-name">${strArtist}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${strArtistThumb}"
      alt="Photo ${strArtist}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${
            intFormedYear || 'information missing'
          }–${intDiedYear || 'present'}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${strGender}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${intMembers}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${strCountry}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${strBiographyEN}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${genresMarkup}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${albumsMarkup}</ul>`;
}

export function createArtistDetails(artistInfo) {
  const markup = artistDetailsTemplate(artistInfo);
  refs.artistDetailsContainer.innerHTML = markup;
}
