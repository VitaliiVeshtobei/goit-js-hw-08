// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainerRef = document.querySelector('.gallery');
const cardMarkup = createGallery(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeend', cardMarkup);

galleryContainerRef.addEventListener('click', onClickPhoto);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`;
    })
    .join('');
}

function onClickPhoto(evt) {
  evt.preventDefault();
}
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  // do something…
});
