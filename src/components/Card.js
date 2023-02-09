export default class Card {
  constructor({ dataCard, userId, handleCardClick, cardTemplateSelector, handleDeleteCard, handleLike, handleDeleteLike }) {
    this._name = dataCard.name;
    this._link = dataCard.link;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._templateSelector = cardTemplateSelector;
    this._handleDeleteCard = handleDeleteCard;
    this._idCard = dataCard._id;
    this._handleLike = handleLike;
    this._handleDeleteLike = handleDeleteLike;
    this._ownerId = dataCard.owner._id;
    this._likesSum = dataCard.likes;
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector('.cards__image');
    this._cardLike = this._newCard.querySelector('.cards__likes-btn');
    this._likesCounter = this._newCard.querySelector('.cards__likes-counter');
    this._btnDeleteCard = this._newCard.querySelector('.cards__delete-btn');
  }

  _getTemplate() {
    const card = document.
      querySelector(this._templateSelector)
      .content.querySelector('.cards__item')
      .cloneNode(true);

    return card;
  }

  _checkDeleteBtnCard() {
    if (this._userId !== this._ownerId) {
      this._btnDeleteCard.classList.add('cards__delete-btn_disabled');
    } else {
      this._btnDeleteCard.classList.remove('cards__delete-btn_disabled');
    }
  }

  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _compareLike() {
    return this._likesSum.some((like) => like._id === this._userId);
  }

  _checkLike() {
    if (this._compareLike()) {
      this._cardLike.classList.add('cards__likes-btn_active');
    } else {
      this._cardLike.classList.remove('cards__likes-btn_active');
    }
  }

  counterLikes(data) {
    this._likesCounter.textContent = data.length;
    this._cardLike.classList.toggle('cards__likes-btn_active');
  }

  _setLikeCard() {
    if (this._cardLike.classList.contains('cards__likes-btn_active')) {
      console.log(this._idCard);
      this._handleDeleteLike(this._idCard);
    } else {
      this._handleLike(this._idCard);
    }
  }

  _setEventListener() {
    const cardDeleteBtn = this._newCard.querySelector('.cards__delete-btn');
    cardDeleteBtn.addEventListener('click', () => { this._handleDeleteCard(this._idCard) });
    this._cardLike.addEventListener('click', () => { this._setLikeCard() });
    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._cardImage) });
  }

  getView() {
    this._setEventListener();
    this._cardName = this._newCard.querySelector('.cards__title');
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._checkLike();
    this._likesCounter.textContent = this._likesSum.length;
    this._checkDeleteBtnCard();

    return this._newCard;
  }
}
