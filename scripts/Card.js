import { openPopupImage } from './utils/utils.js';

export default class Card {
  constructor({ name, link }, cardTemplate) {
    this._name = name;
    this._link = link;
    this._template = cardTemplate;
  }

  _getTemplate() {
    const card = this._template
      .content.querySelector('.cards__item')
      .cloneNode(true);

    return card;
  }

  _setData() {
    const cardName = this._newCard.querySelector('.cards__title');
    cardName.textContent = this._name;
    const cardImage = this._newCard.querySelector('.cards__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _checkLike() {
    this._newCard.querySelector('.cards__likes-btn').classList.toggle('cards__likes-btn_active');
  }

  _setEventListener() {
    const cardDeleteBtn = this._newCard.querySelector('.cards__delete-btn');
    cardDeleteBtn.addEventListener('click', () => { this._deleteCard() });

    const cardLike = this._newCard.querySelector('.cards__likes-btn');
    cardLike.addEventListener('click', () => { this._checkLike() });

    const cardLink = this._newCard.querySelector('.cards__image');
    cardLink.addEventListener('click', () => { openPopupImage(cardLink) });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListener();

    return this._newCard;
  }
}
