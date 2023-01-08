export default class FormValidator {
  constructor(form, formName) {
    this._formSelector = form.formSelector;
    this._inputSelector = form.inputSelector;
    this._submitButtonSelector = form.submitButtonSelector;
    this._inactiveButtonClass = form.inactiveButtonClass;
    this._inputErrorClass = form.inputErrorClass;
    this._errorClass = form.errorClass;
    this._popupForm = document.querySelector(formName);
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector));
    this._buttonElement = this._popupForm.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._popupForm, inputElement);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  disabledPopupBtn() {
    this._buttonElement.classList.add('popup__btn_disabled');
    this._buttonElement.setAttribute('disabled', true);
  }

  _enabledPopupBtn() {
    this._buttonElement.classList.remove('popup__btn_disabled');
    this._buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disabledPopupBtn();
    } else {
      this._enabledPopupBtn();
    }
  }

  validationForm() {
    this._popupForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
