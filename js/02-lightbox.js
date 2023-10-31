import { galleryItems } from './gallery-items.js';
// Change code below this line

const cont = document.querySelector(".gallery");
cont.insertAdjacentHTML("beforeend", createMarkup(galleryItems));




function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `)
    .join("");
}


console.log(galleryItems);



var lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});