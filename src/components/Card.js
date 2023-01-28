export default class Card {
  constructor({ dataCard, handleCardClick, cardTemplateSelector }) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = cardTemplateSelector;
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector('.cards__image');
    this._cardLike = this._newCard.querySelector('.cards__likes-btn');
  }

  _getTemplate() {
    const card = document.
      querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);

    return card;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _checkLike() {
    this._cardLike.classList.toggle('cards__likes-btn_active');
  }

  _setEventListener() {
    const cardDeleteBtn = this._newCard.querySelector('.cards__delete-btn');
    cardDeleteBtn.addEventListener('click', () => { this._deleteCard() });
    this._cardLike.addEventListener('click', () => { this._checkLike() });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._cardImage) });
  }

  getView() {
    this._setEventListener();

    this._cardName = this._newCard.querySelector('.cards__title');
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._newCard;
  }
}
