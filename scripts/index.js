let profileBtn = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');

let popupCloseBtn = document.querySelector('.popup__close-btn');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formElement = document.querySelector('.popup__form');
let popupName = formElement.querySelector('.popup__input_profile_name');
let popupJob = formElement.querySelector('.popup__input_profile_job');

// open popup
function openPopup() {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
}

//close popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

// add name and job
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup();
}

profileBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


