import { refs } from './refs.js';
import { getArtists } from './sound-wave-api.js';
import {
  createArtistsList,
  hideLoader,
  showLoader,
  updateLoadMoreVisibility,
} from './render-functions.js';

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
  if (page > 1) {
    scrollArtists();
  }
}

loadArtists();

refs.loadMoreBtn.addEventListener('click', async () => {
  page++;
  await loadArtists();
});

function scrollArtists() {
  const card = refs.artistsListContainer.firstElementChild;
  const height = card.getBoundingClientRect().height;
  scrollBy({
    behavior: 'smooth',
    top: height,
  });
}
