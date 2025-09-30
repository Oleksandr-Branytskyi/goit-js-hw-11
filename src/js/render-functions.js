import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.getElementById('gallery');
const loaderEl = document.getElementById('loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(image => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `
        <a class="photo-card-link" href="${largeImageURL}">
          <div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p><b>Likes</b><br>${likes}</p>
              <p><b>Views</b><br>${views}</p>
              <p><b>Comments</b><br>${comments}</p>
              <p><b>Downloads</b><br>${downloads}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (!loaderEl) return;
  loaderEl.classList.add('is-loading');
}

export function hideLoader() {
  if (!loaderEl) return;
  loaderEl.classList.remove('is-loading');
}
