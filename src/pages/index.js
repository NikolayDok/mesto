import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';

import {
  cardTemplate,
  cardContainer,
  popupPlaceImage,
  profileAddCardBtn,
  profileBtn,
  popupPlace,
  popupProfile,
  profileName,
  profileJob,
  popupName,
  popupJob,
  initialCards,
  validationConfig,
} from '../utils/constants.js';

// Create popup big image
const popupWithImage = new PopupWithImage(popupPlaceImage);

//create card
const renderCard = (cardsItem) => {
  const card = new Card({
    dataCard: cardsItem,
    handleCardClick: () => {
      popupWithImage.openPopup(cardsItem);
    },
  },
    cardTemplate,
  );
  return card.getView();
};

const initialCardsList = new Section(
  {
    renderer: (cardsItem) => {
      initialCardsList.setItem(renderCard(cardsItem));
    }
  },
  cardContainer
);

initialCardsList.renderItems(initialCards);

const validationPlaceForm = new FormValidator(validationConfig, '.popup__form-place');
validationPlaceForm.enableValidation();

//create popup add card
const popupAddCard = new PopupWithForm({
  popupSelector: popupPlace,
  handleFormSubmit: (data) => {
    data['name'] = data['place'];
    data['link'] = data['place-link'];
    delete data['place'];
    delete data['place-link'];
    cardContainer.prepend(renderCard(data));
    popupAddCard.closePopup();
  },
});

profileAddCardBtn.addEventListener('click', () => {
  validationPlaceForm.disabledPopupBtn();
  popupAddCard.openPopup();
});

popupAddCard.setEventListeners();

//validation profile
const validationProfileForm = new FormValidator(validationConfig, '.popup__form-profile');
validationProfileForm.enableValidation();

// user info
const userInfo = new UserInfo({
  name: profileName,
  infoAbout: profileJob,
});

//submit profile
const popupEdit = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    validationProfileForm.disabledPopupBtn();
    popupEdit.closePopup();
  },
});

// open profile popup
profileBtn.addEventListener('click', () => {
  popupEdit.openPopup();
  const popupUserInfo = userInfo.getUserInfo();
  popupName.value = popupUserInfo.name;
  popupJob.value = popupUserInfo.infoAbout;
});

popupEdit.setEventListeners();
