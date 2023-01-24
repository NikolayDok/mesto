export const popupPlaceImage = document.querySelector('.popup_place_image');
export const profileBtn = document.querySelector('.profile__edit-btn');
export const popupProfile = document.querySelector('.popup_profile_edit');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const formProfile = popupProfile.querySelector('.popup__form');
export const popupName = formProfile.querySelector('.popup__input_profile_name');
export const popupJob = formProfile.querySelector('.popup__input_profile_job');
export const cardTemplate = document.querySelector('#card-template');
export const cardContainer = document.querySelector('.cards__list');
export const popupPlace = document.querySelector('.popup_place_create');
export const profileAddCardBtn = document.querySelector('.profile__add-button');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
