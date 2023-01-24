import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._popupFormInputs = this._popupSelector.querySelectorAll('.popup__input');
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

  closePopup() {
    super.closePopup();
    this._popupForm.reset();
  }
}
