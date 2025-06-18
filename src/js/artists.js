import { getArtists, getArtistById } from './sound-wave-api.js';
import {
  createArtistDetails,
  createArtistsList,
  hideLoader,
  showLoader,
  updateLoadMoreVisibility,
} from './render-functions.js';

const refs = {
  artistsContainer: document.querySelector('.artists-list'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  artistDetailsModal: document.querySelector('.backdrop'),
};

const perPage = 8;
let page = 1;

async function loadArtists() {
  showLoader();
  try {
    const { artists, totalArtists } = await getArtists(perPage, page);
    const maxPage = Math.ceil(totalArtists / perPage);
    createArtistsList(artists);
    updateLoadMoreVisibility(page, maxPage);
  } catch (error) {
    console.log(error);
  }
  hideLoader();
}

loadArtists();

refs.loadMoreBtn.addEventListener('click', async () => {
  page++;
  await loadArtists();
});

refs.artistsContainer.addEventListener('click', async e => {
  const learnMoreBtn = e.target.closest('.artist-btn');
  if (!learnMoreBtn) return;

  const artistId = learnMoreBtn.dataset.artistId;
  const artistInfo = await getArtistById(artistId);

  createArtistDetails(artistInfo);
  refs.artistDetailsModal.classList.add('is-open');
  document.body.classList.add('modal-open');
  refs.artistDetailsModal.addEventListener('click', e => {
    const closeModalBtn = e.target.closest('.modal-close-btn');
    if (!closeModalBtn) return;

    refs.artistDetailsModal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  });
});
