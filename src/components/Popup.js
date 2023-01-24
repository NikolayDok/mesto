export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupCloseBtnSelector = this._popupSelector.querySelector('.popup__close-btn');
  }

  //open popup
  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  // close popup
  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  //closing by esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  // closes when clicking closeBtn
  setEventListeners() {
    this._popupCloseBtnSelector.addEventListener('click', () => {
      this.closePopup();
    });

    //closes when clicking on the darkened area around the form
    this._popupSelector.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.closePopup();
      }
    });
  }
}
