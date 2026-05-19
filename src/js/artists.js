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
const isDesktop = () => window.matchMedia('(min-width: 1440px)').matches;

const filtersState = {
  sortName: undefined,
  genre: undefined,
  searchQuery: undefined,
};

async function loadInitialData() {
  try {
    const genresResponse = await getGenres();
    createGenresList(genresResponse);

    await fetchAndRenderArtists();
  } catch (error) {
    console.error('Error loading initial data:', error);
  }
}

async function loadMoreArtists() {
  page++;
  await fetchAndRenderArtists();
}

async function reloadArtists() {
  page = 1;
  await fetchAndRenderArtists();
}

async function fetchAndRenderArtists() {
  const isFirstPage = page === 1;
  const currentArtistCount = refs.artistsListContainer.children.length;

  showLoader();

  try {
    const { artists, totalArtists } = await getArtists({
      perPage,
      page,
      ...filtersState,
    });

    const maxPage = Math.ceil(totalArtists / perPage);

    if (isFirstPage) {
      refs.artistsListContainer.innerHTML = '';
      refs.emptyState.classList.toggle('is-visible', artists.length === 0);
    }

    if (artists.length > 0) {
      createArtistsList(artists);
    }

    updateLoadMoreVisibility(page, maxPage);
    synchronizeFiltersUI();

    if (!isFirstPage) {
      scrollToNewArtists(currentArtistCount);
    }
  } catch (error) {
    console.error('Error fetching artists:', error);
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

refs.filtersMenu.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.target.elements.search.value.trim();
  filtersState.searchQuery = query || undefined;
  reloadArtists();
});

refs.loadMoreBtn.addEventListener('click', loadMoreArtists);

refs.filtersResetBtn.addEventListener('click', handleReset);

function updateResetButtonStatus() {
  const isDirty = !!(
    filtersState.searchQuery ||
    filtersState.sortName ||
    filtersState.genre
  );
  if (refs.filtersResetBtn) refs.filtersResetBtn.disabled = !isDirty;
}

refs.resetEmptyStateBtn.addEventListener('click', handleReset);

function scrollToNewArtists(startIndex) {
  const newFirstArtist = refs.artistsListContainer.children[startIndex];
  if (!newFirstArtist) return;

  const headerHeight = refs.filtersPanel.offsetHeight;
  newFirstArtist.style.scrollMarginTop = `${headerHeight - 50}px`;

  newFirstArtist.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
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

  reloadArtists();

  const openedDropdown = selectedItem.closest('.js-dropdown');

  if (openedDropdown) {
    openedDropdown.classList.remove('is-open');
    openedDropdown
      .querySelector('button')
      ?.setAttribute('aria-expanded', 'false');
    if (isDesktop()) {
      document.removeEventListener('click', handleOutsideClick);
    }
  }
}

function handleDropdownToggle(target) {
  const currentBtn = target.closest('button');
  if (!currentBtn) return;

  const currentDropdown = currentBtn.closest('.js-dropdown');
  if (!currentDropdown) return;

  const prevOpenedDropdown = refs.filtersMenu.querySelector('.is-open');

  if (prevOpenedDropdown && prevOpenedDropdown !== currentDropdown) {
    prevOpenedDropdown.classList.remove('is-open');
    prevOpenedDropdown
      .querySelector('button')
      ?.setAttribute('aria-expanded', 'false');
    if (isDesktop()) {
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  const isDropdownOpen = currentDropdown.classList.toggle('is-open');
  currentBtn.setAttribute('aria-expanded', isDropdownOpen);

  if (isDesktop()) {
    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  }
}
