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

const filtersState = {
  sortName: undefined,
  genre: undefined,
  searchQuery: undefined,
};

refs.filtersMenu.addEventListener('submit', e => {
  e.preventDefault();
  filtersState.searchQuery = e.target.elements.search.value;
  reloadArtists();
});

async function loadInitialData() {
  showLoader();
  try {
    const [artistsResponse, genresResponse] = await Promise.all([
      getArtists({
        perPage,
        page,
        ...filtersState,
      }),
      getGenres(),
    ]);

    const { artists, totalArtists } = artistsResponse;
    const maxPage = Math.ceil(totalArtists / perPage);
    if (artists.length === 0) {
      refs.emptyState.classList.add('is-visible');
    } else {
      refs.emptyState.classList.remove('is-visible');
      createArtistsList(artists);
    }
    updateLoadMoreVisibility(page, maxPage);

    createGenresList(genresResponse);
    synchronizeFiltersUI();
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
      ...filtersState,
    });
    const maxPage = Math.ceil(totalArtists / perPage);
    createArtistsList(artists);
    updateLoadMoreVisibility(page, maxPage);
    scrollArtists();
  } catch (error) {
    console.error('Error loading more artists:', error);
  } finally {
    hideLoader();
  }
}

async function reloadArtists() {
  page = 1;
  refs.artistsListContainer.innerHTML = '';
  showLoader();
  try {
    const { artists, totalArtists } = await getArtists({
      perPage,
      page,
      ...filtersState,
    });
    const maxPage = Math.ceil(totalArtists / perPage);
    if (artists.length === 0) {
      refs.emptyState.classList.add('is-visible');
    } else {
      refs.emptyState.classList.remove('is-visible');
      createArtistsList(artists);
    }
    updateLoadMoreVisibility(page, maxPage);
    synchronizeFiltersUI();
  } catch (error) {
    console.error('Error reloading artists:', error);
  } finally {
    hideLoader();
  }
}

function synchronizeFiltersUI() {
  refs.inputSearch.value = filtersState.searchQuery || '';

  const allFilterItems = refs.filtersMenu.querySelectorAll(
    '.sorting-item, .genre-item'
  );

  allFilterItems.forEach(item => {
    let isActive = false;
    if (item.classList.contains('sorting-item')) {
      isActive = item.dataset.sort === filtersState.sortName;
    } else if (item.classList.contains('genre-item')) {
      isActive = item.dataset.genre === filtersState.genre;
    }

    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-selected', isActive.toString());
  });

  updateResetButtonStatus();
}

function handleReset() {
  filtersState.searchQuery = undefined;
  filtersState.sortName = undefined;
  filtersState.genre = undefined;

  refs.filtersMenu.reset();
  synchronizeFiltersUI();

  reloadArtists();
}

loadInitialData();

refs.loadMoreBtn.addEventListener('click', loadMoreArtists);

if (refs.filtersResetBtn) {
  refs.filtersResetBtn.addEventListener('click', handleReset);
}

function updateResetButtonStatus() {
  const isDirty = !!(
    filtersState.searchQuery ||
    filtersState.sortName ||
    filtersState.genre
  );
  if (refs.filtersResetBtn) refs.filtersResetBtn.disabled = !isDirty;
}

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

  if (selectedItem.classList.contains('sorting-item')) {
    filtersState.sortName = selectedItem.dataset.sort;
  } else if (selectedItem.classList.contains('genre-item')) {
    filtersState.genre = selectedItem.dataset.genre;
  }

  synchronizeFiltersUI();
  reloadArtists();

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
