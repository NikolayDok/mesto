import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupFormInputs = this._popupForm.querySelectorAll('.popup__input');
    this._popupFormSaveBtn = this._popupForm.querySelector('.popup__btn');
    this._popupFormSaveBtnText = this._popupFormSaveBtn.textContent;
  }

  _getInputValues() {
    this._popupFormValues = {};
    this._popupFormInputs.forEach((element) => {
      this._popupFormValues[element.name] = element.value;
    });
    return this._popupFormValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  loadingSubmit(isLoading) {
    if (isLoading) {
      this._popupFormSaveBtn.textContent = 'Сохранение...';
    } else {
      this._popupFormSaveBtn.textContent = this._popupFormSaveBtnText;
    }
  }

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }

}
