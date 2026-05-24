import { refs } from './refs.js';
import {
  createArtistDetails,
  showModalLoader,
  hideModalLoader,
} from './render-functions.js';
import { getArtistInfoById } from './sound-wave-api.js';

function handleModalClick(e) {
  const closeModalBtn = e.target.closest('.modal-close-btn');
  const overlay = e.target === refs.artistDetailsModal;
  if (!closeModalBtn && !overlay) return;

  closeArtistModal();
}

function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    closeArtistModal();
  }
}

function closeArtistModal() {
  refs.artistDetailsModal.classList.remove('is-open');
  refs.artistModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  refs.artistDetailsModal.removeEventListener('click', handleModalClick);
  document.removeEventListener('keydown', handleEscapeKey);
}

refs.artistsListContainer.addEventListener('click', async e => {
  const learnMoreBtn = e.target.closest('.artist-btn');
  if (!learnMoreBtn) return;

  const artistId = learnMoreBtn.dataset.artistId;

  refs.artistDetailsModal.classList.add('is-open');
  document.body.classList.add('modal-open');
  showModalLoader();
  try {
    const artistInfo = await getArtistInfoById(artistId);
    createArtistDetails(artistInfo);

    refs.artistModal.classList.remove('is-hidden');
    refs.artistDetailsModal.scrollTop = 0;

    refs.artistDetailsModal.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleEscapeKey);
  } catch (error) {
    console.error('Error loading artist details:', error);
  } finally {
    hideModalLoader();
  }
});
