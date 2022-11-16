const popupProfile = document.querySelector('.popup_profile_edit');
const popupPlace = document.querySelector('.popup_place_create');
const popupPlaceImage = document.querySelector('.popup_place_image');
const profileBtn = document.querySelector('.profile__edit-btn');
const profileAddCardBtn = document.querySelector('.profile__add-button');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formProfile = popupProfile.querySelector('.popup__form');
const popupName = formProfile.querySelector('.popup__input_profile_name');
const popupJob = formProfile.querySelector('.popup__input_profile_job');
const popupPlaceName = document.querySelector('.popup__input_place_name');
const popupPlaceLink = document.querySelector('.popup__input_place_link');
const cardContainer = document.querySelector('.cards__list');
const popupPlaceImageLink = document.querySelector('.popup__image');
const popupPlaceImageCaption = document.querySelector('.popup__figcaption');


//open popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//close popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

//close popup by click outside
function initClosePopupByOverlay(closeOverlay) {
  closeOverlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(closeOverlay);
    }
  });
};

// open profile popup
profileBtn.addEventListener('click', () => {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
});

// add name and job
function formProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup(popupProfile);
}

//close popups
popupCloseBtns.forEach(item => {
  const popupCloseElement = item.closest('.popup');
  item.addEventListener('click', () => {
    closePopup(popupCloseElement);
  })
});

//close popup by click outside
initClosePopupByOverlay(popupProfile);
initClosePopupByOverlay(popupPlace);
initClosePopupByOverlay(popupPlaceImage);

profileAddCardBtn.addEventListener('click', () => {
  openPopup(popupPlace);
});

//submit profile
formProfile.addEventListener('submit', formProfileSubmitHandler);

//cards
const cardTemplate = document.querySelector('#card-template').content.querySelector('.cards__item');

const cardDelete = (event) => {
  event.target.closest('.cards__item').remove();
}

const cardLikeActive = (event) => {
  event.target.classList.toggle('cards__likes-btn_active');
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
    openPopup(popupPlaceImage);
  }
  cardName.textContent = cardsItem.name;
  cardLink.src = cardsItem.link;
  cardLink.alt = cardsItem.name;
  cardDeleteBtn.addEventListener('click', cardDelete);
  cardLike.addEventListener('click', cardLikeActive);
  cardLink.addEventListener('click', popupImageOpen);

  return newCard;
}

const formPlaceSubmitHandler = (event) => {
  event.preventDefault();
  renderCard({ name: popupPlaceName.value, link: popupPlaceLink.value })
  const popupPlaceResetForm = popupPlace.querySelector('.popup__form');
  popupPlaceResetForm.reset();
  closePopup(popupPlace);
}

const renderCard = (cardsItem) => {
  cardContainer.prepend(createNewCard(cardsItem));
}

initialCards.forEach(renderCard);

popupPlace.addEventListener('submit', formPlaceSubmitHandler);
