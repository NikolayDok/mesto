const popupPlaceImageLink = document.querySelector('.popup__image');
const popupPlaceImageCaption = document.querySelector('.popup__figcaption');
const popupPlaceImage = document.querySelector('.popup_place_image');

const openPopupImage = (cardPopup) => {
  popupPlaceImageLink.src = cardPopup.src;
  popupPlaceImageLink.alt = cardPopup.alt;
  popupPlaceImageCaption.textContent = cardPopup.alt;
  openPopup(popupPlaceImage);
};

//open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
};

// close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
};

const escClose = (event) => {
  const { key } = event;
  if (key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
};

export { openPopupImage, openPopup, closePopup };
