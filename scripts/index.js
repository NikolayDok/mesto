let profileBtn = document.querySelector('.profile__btn');
let popup = document.querySelector('.popup');

let popupCloseBtn = document.querySelector('.popup__close-btn');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');

// open popup
function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

profileBtn.addEventListener('click', popupOpen);

//close popup
function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseBtn.addEventListener('click', closePopup);

window.onclick = function (close) {
  if (close.target == popup) {
    popup.classList.remove('popup_opened');
  }
}

// add name and job
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


