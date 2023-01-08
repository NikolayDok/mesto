import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopup, closePopup } from './utils/utils.js';

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
const cardTemplate = document.querySelector('#card-template');
const popupPlaceResetForm = popupPlace.querySelector('.popup__form');

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

//close popup by click outside
initClosePopupByOverlay(popupProfile);
initClosePopupByOverlay(popupPlace);
initClosePopupByOverlay(popupPlaceImage);

profileAddCardBtn.addEventListener('click', () => {
  openPopup(popupPlace);
});

//submit profile
formProfile.addEventListener('submit', formProfileSubmitHandler);

const formPlaceSubmitHandler = (event) => {
  event.preventDefault();
  renderCard({ name: popupPlaceName.value, link: popupPlaceLink.value });
  popupPlaceResetForm.reset();
  validationPlaceForm.disabledPopupBtn();
  closePopup(popupPlace);
};

const renderCard = (cardsItem) => {
  const card = new Card(cardsItem, cardTemplate);
  cardContainer.prepend(card.getView());
};

initialCards.forEach(renderCard);

popupPlace.addEventListener('submit', formPlaceSubmitHandler);

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const validationProfileForm = new FormValidator(validationConfig, '.popup__form-profile');
validationProfileForm.enableValidation();

const validationPlaceForm = new FormValidator(validationConfig, '.popup__form-place');
validationPlaceForm.enableValidation();
