import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupImg = this._popupElement.querySelector('.popup__image');
    this._popupCaption = this._popupElement.querySelector('.popup__figcaption');
  }

  openPopup(cardPopup) {
    super.openPopup();
    this._popupImg.src = cardPopup.link;
    this._popupCaption.alt = cardPopup.name;
    this._popupCaption.textContent = cardPopup.name;
    super.setEventListeners();
  }
}
