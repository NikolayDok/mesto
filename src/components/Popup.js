export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector('.popup__close-btn');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //open popup
  openPopup() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // close popup
  closePopup() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  //closing by esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  // closes when clicking closeBtn
  setEventListeners() {
    this._popupCloseBtn.addEventListener('click', () => {
      this.closePopup();
    });

    //closes when clicking on the darkened area around the form
    this._popupElement.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup();
      }
    });
  }
}
