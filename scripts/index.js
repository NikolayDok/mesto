const popupProfile = document.querySelector('.popup_profile_edit');
const popupPlace = document.querySelector('.popup_place_create');
const popupPlaceImage = document.querySelector('.popup_place_image');
const profileBtn = document.querySelector('.profile__edit-btn');
const profileAddCardBtn = document.querySelector('.profile__add-button');
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__form');
const popupName = formElement.querySelector('.popup__input_profile_name');
const popupJob = formElement.querySelector('.popup__input_profile_job');
const popupPlaceName = document.querySelector('.popup__input_place_name');
const popupPlaceLink = document.querySelector('.popup__input_place_link');
const cardContainer = document.querySelector('.cards__list');
const popupPlaceImageLink = document.querySelector('.popup__image');
const popupPlaceImageCaption = document.querySelector('.popup__figcaption');


//open popup
function popupOpen(popup) {
  popup.classList.add('popup_opened');
};

//close popup
function popupClose(popup) {
  popup.classList.remove('popup_opened');
};

//close popup by click outside
function popupCloseOverlay(closeOverlay) {
  closeOverlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      popupClose(closeOverlay);
    }
  });
};

// open profile popup
profileBtn.addEventListener('click', () => {
  popupOpen(popupProfile);
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
});

// add name and job
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  popupClose(popupProfile);
}
//close popups
popupCloseBtn.forEach(item => {
  item.addEventListener('click', () => {
    popupClose(popupProfile);
    popupClose(popupPlace);
    popupClose(popupPlaceImage);
  })
});

//close popup by click outside
popupCloseOverlay(popupProfile);
popupCloseOverlay(popupPlace);
popupCloseOverlay(popupPlaceImage);

profileAddCardBtn.addEventListener('click', () => {
  popupOpen(popupPlace);
});

//submit profile
formElement.addEventListener('submit', formSubmitHandler);

//cards
const cardTemplate = document.querySelector('#card-template').content.querySelector('.cards__item');

const cardDelete = (event) => {
  event.target.closest('.cards__item').remove();
}

const cardLikeActive = (event) => {
  event.target.closest('.cards__likes-btn').classList.toggle('cards__likes-btn_active');
}

const createNewCard = (cardsItem) => {
  const newCard = cardTemplate.cloneNode(true);
  const cardName = newCard.querySelector('.cards__title');
  const cardLink = newCard.querySelector('.cards__image');
  const cardDeleteBtn = newCard.querySelector('.cards__delete-btn');
  const cardLike = newCard.querySelector('.cards__likes-btn');
  const popupImageOpen = () => {
    popupPlaceImageLink.src = cardsItem.link;
    popupPlaceImageLink.alt = cardsItem.name;
    popupPlaceImageCaption.textContent = cardsItem.name;
    popupOpen(popupPlaceImage);
  }
  cardName.textContent = cardsItem.name;
  cardLink.src = cardsItem.link;
  cardLink.alt = cardsItem.name;
  cardDeleteBtn.addEventListener('click', cardDelete);
  cardLike.addEventListener('click', cardLikeActive);
  cardLink.addEventListener('click', popupImageOpen);

  return newCard;
}

const formSubmitHandlerPlace = (event) => {
  event.preventDefault();
  createCard({ name: popupPlaceName.value, link: popupPlaceLink.value })
  popupPlaceName.value = '';
  popupPlaceLink.value = '';
  popupClose(popupPlace);
}

const createCard = (cardsItem) => {
  cardContainer.prepend(createNewCard(cardsItem));
}

initialCards.forEach((cardsItem) => {
  createCard(cardsItem);
});

popupPlace.addEventListener('submit', formSubmitHandlerPlace);




