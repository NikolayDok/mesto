export const profileBtn = document.querySelector('.profile__edit-btn');
export const popupProfile = document.querySelector('.popup_profile_edit');
export const formProfile = popupProfile.querySelector('.popup__form');
export const popupName = formProfile.querySelector('.popup__input_profile_name');
export const popupJob = formProfile.querySelector('.popup__input_profile_job');
export const cardContainer = document.querySelector('.cards__list');
export const profileAddCardBtn = document.querySelector('.profile__add-button');
export const popupFormProfile = document.querySelector('.popup__form-profile');
export const popupFormPlace = document.querySelector('.popup__form-place');
export const avatarBtn = document.querySelector('.profile__add-avatar-btn');
export const popupFormAvatar = document.querySelector('.popup__form-avatar');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
