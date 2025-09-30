import { getImagesByQuery } from './js/pixabey-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/* DOM */
const form = document.getElementById('search-form');
const input = form.querySelector('input[name="search-text"]');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    const hits = Array.isArray(data.hits) ? data.hits : [];

    if (hits.length === 0) {
      iziToast.error({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    createGallery(hits);

    iziToast.success({
      title: 'Success',
      message: `Found ${data.totalHits} images.`,
      position: 'topRight',
    });

    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message:
        'Something went wrong while fetching images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
