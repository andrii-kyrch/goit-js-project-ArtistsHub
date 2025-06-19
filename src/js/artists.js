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
}

loadArtists();

refs.loadMoreBtn.addEventListener('click', async () => {
  page++;
  await loadArtists();
});
