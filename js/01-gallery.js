import { galleryItems } from './gallery-items.js';
// Change code below this line

const cont = document.querySelector(".gallery");
cont.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
cont.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const imgGallery = event.target;
  const original = imgGallery.dataset.source;
  const description = imgGallery.alt;

  const instance = basicLightbox.create(
    `<div>
      <img  src="${original}" alt="${description}" width="1140" />
    </div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );
    instance.show();
    function onEscPress(click) {
        if (click.key === "Escape") {
            instance.close();
        }
    }
}

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
      </li>
    `)
    .join("");
}

