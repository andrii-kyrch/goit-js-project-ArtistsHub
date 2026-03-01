import { refs } from './refs.js';
import { getArtists, getGenres } from './sound-wave-api.js';
import {
  createArtistsList,
  createGenresList,
  hideLoader,
  showLoader,
  updateLoadMoreVisibility,
} from './render-functions.js';

const perPage = 8;
let page = 1;
let sortName;
let genre;

async function loadInitialData() {
  showLoader();
  try {
    const [artistsResponse, genresResponse] = await Promise.all([
      getArtists({ perPage, page, sortName, genre }),
      getGenres(),
    ]);

    const { artists, totalArtists } = artistsResponse;
    const maxPage = Math.ceil(totalArtists / perPage);
    createArtistsList(artists);
    updateLoadMoreVisibility(page, maxPage);

    createGenresList(genresResponse);
  } catch (error) {
    console.error('Error loading initial data:', error);
  } finally {
    hideLoader();
  }
}

async function loadMoreArtists() {
  page++;
  showLoader();
  try {
    const { artists, totalArtists } = await getArtists({
      perPage,
      page,
      sortName,
      genre,
    });
    const maxPage = Math.ceil(totalArtists / perPage);
    createArtistsList(artists);
    updateLoadMoreVisibility(page, maxPage);
    scrollArtists();
  } catch (error) {
    console.error('Error loading more artists:', error);
  }
  hideLoader();
}

async function reloadArtists() {
  page = 1;
  refs.artistsListContainer.innerHTML = '';
  showLoader();
  try {
    const { artists, totalArtists } = await getArtists({
      perPage,
      page,
      sortName,
      genre,
    });
    const maxPage = Math.ceil(totalArtists / perPage);
    createArtistsList(artists);
    updateLoadMoreVisibility(page, maxPage);
  } catch (error) {
    console.error('Error reloading artists:', error);
  } finally {
    hideLoader();
  }
}

loadInitialData();

refs.loadMoreBtn.addEventListener('click', loadMoreArtists);

function scrollArtists() {
  const card = refs.artistsListContainer.firstElementChild;
  if (!card) return;
  const height = card.getBoundingClientRect().height;
  scrollBy({
    behavior: 'smooth',
    top: height,
  });
}

const handleOutsideClick = e => {
  if (
    !refs.filtersPanel.contains(e.target) &&
    !refs.filtersMenu.contains(e.target)
  ) {
    const openedInnerBtns = refs.filtersMenu.querySelectorAll('.is-open');
    openedInnerBtns.forEach(btn => {
      btn.classList.remove('is-open');
    });
    refs.filtersPanel.classList.remove('is-open');
    document.removeEventListener('click', handleOutsideClick);
  }
};

refs.filtersPanel.addEventListener('click', e => {
  if (!e.target.closest('.filters-toggle')) return;

  const isOpen = refs.filtersPanel.classList.toggle('is-open');
  refs.filtersToggle.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    document.addEventListener('click', handleOutsideClick);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
});

refs.filtersMenu.addEventListener('click', handleFiltersMenuClick);

function handleFiltersMenuClick(e) {
  const selectedItem = e.target.closest('.sorting-item, .genre-item');

  if (selectedItem) {
    handleFiltersSelection(selectedItem);
    return;
  }
  handleDropdownToggle(e.target);
}

function handleFiltersSelection(selectedItem) {
  const prevActiveItem = selectedItem.parentElement.querySelector('.is-active');

  if (prevActiveItem) {
    prevActiveItem.classList.remove('is-active');
    prevActiveItem.setAttribute('aria-selected', 'false');
  }
  selectedItem.classList.add('is-active');
  selectedItem.setAttribute('aria-selected', 'true');

  if (selectedItem.classList.contains('sorting-item')) {
    sortName = selectedItem.dataset.sort;
    reloadArtists();
  }

  if (selectedItem.classList.contains('genre-item')) {
    genre = selectedItem.textContent.toLowerCase().trim();
    reloadArtists();
  }

  const openedDropdown = selectedItem.closest('.js-dropdown');

  if (openedDropdown) {
    openedDropdown.classList.remove('is-open');
    openedDropdown
      .querySelector('button')
      ?.setAttribute('aria-expanded', 'false');
    const isDesktop =
      window.getComputedStyle(refs.filtersToggle).display === 'none';
    if (isDesktop) {
      document.removeEventListener('click', handleOutsideClick);
    }
  }
}

function handleDropdownToggle(target) {
  const currentBtn = target.closest('button');
  if (!currentBtn) return;

  const currentDropdown = currentBtn.closest('.js-dropdown');
  if (!currentDropdown) return;

  const isDesktop =
    window.getComputedStyle(refs.filtersToggle).display === 'none';

  const prevOpenedDropdown = refs.filtersMenu.querySelector('.is-open');

  if (prevOpenedDropdown && prevOpenedDropdown !== currentDropdown) {
    prevOpenedDropdown.classList.remove('is-open');
    prevOpenedDropdown
      .querySelector('button')
      ?.setAttribute('aria-expanded', 'false');
    if (isDesktop) {
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  const isDropdownOpen = currentDropdown.classList.toggle('is-open');
  currentBtn.setAttribute('aria-expanded', isDropdownOpen);

  if (isDesktop) {
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  }
}
