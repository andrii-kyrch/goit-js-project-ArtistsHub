const refs = {
  artistsContainer: document.querySelector('.artists-list'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
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
            <use href="./img/icons.svg#caret-right"></use>
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
