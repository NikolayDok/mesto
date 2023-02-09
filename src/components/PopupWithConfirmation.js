import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._btnDelete = this._popupElement.querySelector('.popup__btn-delete');
  }

  confirmationCartDelete(removalCard) {
    this._submitDeleteCard = removalCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._btnDelete.addEventListener('click', () => {
      this._submitDeleteCard();
      this.closePopup();
    });
  }
}


