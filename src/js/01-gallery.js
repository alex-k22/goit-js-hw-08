// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = ({preview, original, description}) => 
  `<a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;

const markup = galleryItems.map((element) => makeGalleryCard(element)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});