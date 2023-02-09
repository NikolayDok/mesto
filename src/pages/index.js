import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import Api from '../components/Api';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

import {
  cardContainer,
  profileAddCardBtn,
  profileBtn,
  avatarBtn,
  popupFormProfile,
  popupFormAvatar,
  popupFormPlace,
  popupName,
  popupJob,
  validationConfig,
} from '../utils/constants.js';

let userId;

//Api
const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '1ecbbea3-4e9e-4d1f-ac87-f48debc46fcc',
    'Content-Type': 'application/json',
  }
};

const api = new Api(configApi);

// Get initial cards and user info
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([dataUser, dataCard]) => {

    userId = dataUser._id;
    userInfo.setUserInfo(dataUser);
    console.log(dataUser);

    dataCard.reverse();
    initialCardsList.renderItems(dataCard);

  })
  .catch((err) => {
    console.log(err);
  });

//create card
const renderCard = (cardsItem) => {
  const card = new Card({
    dataCard: cardsItem,
    userId: userId,
    handleCardClick: () => {
      popupWithImage.openPopup(cardsItem);
    },
    cardTemplateSelector: '#card-template',
    handleDeleteCard: (id) => {
      popupDeleteCard.openPopup(cardsItem);
      popupDeleteCard.confirmationCartDelete(() => {
        api.deleteCardApi(id)
          .then(() => {
            card.deleteCard();
          })
          .catch((err) => {
            console.log(err);
          });
      })
    },
    handleLike: (id) => {
      api.setLikeCard(id)
        .then((data) => {
          card.counterLikes(data.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDeleteLike: (id) => {
      api.deleteLikeCard(id)
        .then((data) => {
          card.counterLikes(data.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
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

// Create popup big image
const popupWithImage = new PopupWithImage({
  popupSelector: '.popup_place_image'
});

// Create popup delete card
const popupDeleteCard = new PopupWithConfirmation({
  popupSelector: '.popup_delete-card'
});

popupDeleteCard.setEventListeners();

const validationPlaceForm = new FormValidator(validationConfig, popupFormPlace);
validationPlaceForm.enableValidation();

//create popup add card
const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_place_create',
  handleFormSubmit: (data) => {
    popupAddCard.loadingSubmit(true);
    api.createCard(data)
      .then((data) => {
        cardContainer.prepend(renderCard(data));
        popupAddCard.closePopup();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupAddCard.loadingSubmit(false);
      })
  },
});

profileAddCardBtn.addEventListener('click', () => {
  validationPlaceForm.disabledPopupBtn();
  popupAddCard.openPopup();
});

popupAddCard.setEventListeners();

//validation profile
const validationProfileForm = new FormValidator(validationConfig, popupFormProfile);
validationProfileForm.enableValidation();

// user info
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  infoAboutSelector: '.profile__job',
  profileAvatarSelector: '.profile__avatar',
});

//submit profile
const popupEdit = new PopupWithForm({
  popupSelector: '.popup_profile_edit',
  handleFormSubmit: (data) => {
    popupEdit.loadingSubmit(true);
    api.sendUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        validationProfileForm.disabledPopupBtn();
        popupEdit.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEdit.loadingSubmit(false);
      });
  },
});

// open profile popup
profileBtn.addEventListener('click', () => {
  popupEdit.openPopup();
  const popupUserInfo = userInfo.getUserInfo();
  popupName.value = popupUserInfo.name;
  popupJob.value = popupUserInfo.about;
});

popupEdit.setEventListeners();


//validation avatar
const validationAvatarForm = new FormValidator(validationConfig, popupFormAvatar);
validationAvatarForm.enableValidation();

//create popup avatar
const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar_edit',
  handleFormSubmit: (data) => {
    console.log(data);
    popupEditAvatar.loadingSubmit(true);
    api.sendAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        validationAvatarForm.disabledPopupBtn();
        popupEditAvatar.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.loadingSubmit(false);
      });
  },
});

avatarBtn.addEventListener('click', () => {
  popupEditAvatar.openPopup();
});

popupEditAvatar.setEventListeners();
