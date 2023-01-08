import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupProfile = document.querySelector('.popup_profile_edit');
const popupPlace = document.querySelector('.popup_place_create');
const popupPlaceImage = document.querySelector('.popup_place_image');
const profileBtn = document.querySelector('.profile__edit-btn');
const profileAddCardBtn = document.querySelector('.profile__add-button');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form');
const popupName = formProfile.querySelector('.popup__input_profile_name');
const popupJob = formProfile.querySelector('.popup__input_profile_job');
const popupPlaceName = document.querySelector('.popup__input_place_name');
const popupPlaceLink = document.querySelector('.popup__input_place_link');
const cardContainer = document.querySelector('.cards__list');
const popupPlaceImageLink = document.querySelector('.popup__image');
const popupPlaceImageCaption = document.querySelector('.popup__figcaption');

//open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escClose);
};

//close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escClose);
};

//close popup by click outside
function initClosePopupByOverlay(closeOverlay) {
  closeOverlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(closeOverlay);
    }
  });
};

// open profile popup
profileBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
});

// add name and job
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  validationProfileForm.disabledPopupBtn();
  closePopup(popupProfile);
}

//close popups
popupCloseBtns.forEach(item => {
  const popupCloseElement = item.closest('.popup');
  item.addEventListener('click', () => {
    closePopup(popupCloseElement);
  });
});

const escClose = (event) => {
  const { key } = event;
  if (key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
};

//close popup by click outside
initClosePopupByOverlay(popupProfile);
initClosePopupByOverlay(popupPlace);
initClosePopupByOverlay(popupPlaceImage);

profileAddCardBtn.addEventListener('click', () => {
  openPopup(popupPlace);
});

//submit profile
formProfile.addEventListener('submit', formProfileSubmitHandler);

export const openPopupImage = (cardPopup) => {
  popupPlaceImageLink.src = cardPopup.src;
  popupPlaceImageLink.alt = cardPopup.alt;
  popupPlaceImageCaption.textContent = cardPopup.alt;
  openPopup(popupPlaceImage);
};

const formPlaceSubmitHandler = (event) => {
  event.preventDefault();
  renderCard({ name: popupPlaceName.value, link: popupPlaceLink.value });
  const popupPlaceResetForm = popupPlace.querySelector('.popup__form');
  popupPlaceResetForm.reset();
  validationPlaceForm.disabledPopupBtn();
  closePopup(popupPlace);
};

const renderCard = (cardsItem) => {
  const card = new Card(cardsItem);
  cardContainer.prepend(card.getView());
};

initialCards.forEach(renderCard);

popupPlace.addEventListener('submit', formPlaceSubmitHandler);


const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const validationProfileForm = new FormValidator(enableValidation, '.popup__form-profile');
validationProfileForm.validationForm();

const validationPlaceForm = new FormValidator(enableValidation, '.popup__form-place');
validationPlaceForm.validationForm();
