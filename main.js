(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.dataCard,r=t.userId,o=t.handleCardClick,i=t.cardTemplateSelector,u=t.handleDeleteCard,a=t.handleLike,c=t.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._userId=r,this._handleCardClick=o,this._templateSelector=i,this._handleDeleteCard=u,this._idCard=n._id,this._handleLike=a,this._handleDeleteLike=c,this._ownerId=n.owner._id,this._likesSum=n.likes,this._newCard=this._getTemplate(),this._cardImage=this._newCard.querySelector(".cards__image"),this._cardLike=this._newCard.querySelector(".cards__likes-btn"),this._likesCounter=this._newCard.querySelector(".cards__likes-counter"),this._btnDeleteCard=this._newCard.querySelector(".cards__delete-btn")}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_checkDeleteBtnCard",value:function(){this._userId!==this._ownerId?this._btnDeleteCard.classList.add("cards__delete-btn_disabled"):this._btnDeleteCard.classList.remove("cards__delete-btn_disabled")}},{key:"deleteCard",value:function(){this._newCard.remove(),this._newCard=null}},{key:"_compareLike",value:function(){var e=this;return this._likesSum.some((function(t){return t._id===e._userId}))}},{key:"_checkLike",value:function(){this._compareLike()?this._cardLike.classList.add("cards__likes-btn_active"):this._cardLike.classList.remove("cards__likes-btn_active")}},{key:"counterLikes",value:function(e){this._likesCounter.textContent=e.length,this._cardLike.classList.toggle("cards__likes-btn_active")}},{key:"_setLikeCard",value:function(){this._cardLike.classList.contains("cards__likes-btn_active")?(console.log(this._idCard),this._handleDeleteLike(this._idCard)):this._handleLike(this._idCard)}},{key:"_setEventListener",value:function(){var e=this;this._newCard.querySelector(".cards__delete-btn").addEventListener("click",(function(){e._handleDeleteCard(e._idCard)})),this._cardLike.addEventListener("click",(function(){e._setLikeCard()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._cardImage)}))}},{key:"getView",value:function(){return this._setEventListener(),this._cardName=this._newCard.querySelector(".cards__title"),this._cardName.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._checkLike(),this._likesCounter.textContent=this._likesSum.length,this._checkDeleteBtnCard(),this._newCard}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._popupForm=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._popupForm.querySelector(".".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._popupForm.querySelector(".".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._popupForm.querySelectorAll(this._inputSelector)),this._buttonElement=this._popupForm.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disabledPopupBtn",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enabledPopupBtn",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disabledPopupBtn():this._enabledPopupBtn()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t){var n=t.popupSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(n),this._popupCloseBtn=this._popupElement.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseBtn.addEventListener("click",(function(){e.closePopup()})),this._popupElement.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.closePopup()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._popupImg=t._popupElement.querySelector(".popup__image"),t._popupCaption=t._popupElement.querySelector(".popup__figcaption"),t}return t=u,(n=[{key:"openPopup",value:function(e){p(h(u.prototype),"openPopup",this).call(this),this._popupImg.src=e.link,this._popupCaption.alt=e.name,this._popupCaption.textContent=e.name,p(h(u.prototype),"setEventListeners",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var m=function(){function e(t){var n=t.nameSelector,r=t.infoAboutSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._infoAbout=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.name=this._name.textContent,this._userInfo.about=this._infoAbout.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._infoAbout.textContent=e.about,this._avatar.src=e.avatar}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._handleFormSubmit=r,t._popupForm=t._popupElement.querySelector(".popup__form"),t._popupFormInputs=t._popupForm.querySelectorAll(".popup__input"),t._popupFormSaveBtn=t._popupForm.querySelector(".popup__btn"),t._popupFormSaveBtnText=t._popupFormSaveBtn.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._popupFormValues={},this._popupFormInputs.forEach((function(t){e._popupFormValues[t.name]=t.value})),this._popupFormValues}},{key:"setEventListeners",value:function(){var e=this;this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),k(P(u.prototype),"setEventListeners",this).call(this)}},{key:"loadingSubmit",value:function(e){this._popupFormSaveBtn.textContent=e?"Сохранение...":this._popupFormSaveBtnText}},{key:"closePopup",value:function(){k(P(u.prototype),"closePopup",this).call(this),this._popupForm.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var I=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var q=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"_verificationResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._verificationResponse)}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then(this._verificationResponse)}},{key:"sendAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then(this._verificationResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._verificationResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._verificationResponse)}},{key:"deleteCardApi",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._verificationResponse)}},{key:"setLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._verificationResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._verificationResponse)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function V(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var N,H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,{popupSelector:n}))._btnDelete=t._popupElement.querySelector(".popup__btn-delete"),t}return t=u,(n=[{key:"confirmationCartDelete",value:function(e){this._submitDeleteCard=e}},{key:"setEventListeners",value:function(){var e=this;F(U(u.prototype),"setEventListeners",this).call(this),this._btnDelete.addEventListener("click",(function(){e._submitDeleteCard(),e.closePopup()}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),J=document.querySelector(".profile__edit-btn"),M=document.querySelector(".popup_profile_edit").querySelector(".popup__form"),z=M.querySelector(".popup__input_profile_name"),G=M.querySelector(".popup__input_profile_job"),$=document.querySelector(".cards__list"),K=document.querySelector(".profile__add-button"),Q=document.querySelector(".popup__form-profile"),W=document.querySelector(".popup__form-place"),X=document.querySelector(".profile__add-avatar-btn"),Y=document.querySelector(".popup__form-avatar"),Z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new q({url:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"1ecbbea3-4e9e-4d1f-ac87-f48debc46fcc","Content-Type":"application/json"}});Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];N=o._id,le.setUserInfo(o),console.log(o),i.reverse(),re.renderItems(i)})).catch((function(e){console.log(e)}));var ne=function(e){var t=new n({dataCard:e,userId:N,handleCardClick:function(){oe.openPopup(e)},cardTemplateSelector:"#card-template",handleDeleteCard:function(n){ie.openPopup(e),ie.confirmationCartDelete((function(){te.deleteCardApi(n).then((function(){t.deleteCard()})).catch((function(e){console.log(e)}))}))},handleLike:function(e){te.setLikeCard(e).then((function(e){t.counterLikes(e.likes)})).catch((function(e){console.log(e)}))},handleDeleteLike:function(e){te.deleteLikeCard(e).then((function(e){t.counterLikes(e.likes)})).catch((function(e){console.log(e)}))}});return t.getView()},re=new I({renderer:function(e){re.setItem(ne(e))}},$),oe=new _({popupSelector:".popup_place_image"}),ie=new H({popupSelector:".popup_delete-card"});ie.setEventListeners();var ue=new i(Z,W);ue.enableValidation();var ae=new j({popupSelector:".popup_place_create",handleFormSubmit:function(e){ae.loadingSubmit(!0),te.createCard(e).then((function(e){$.prepend(ne(e)),ae.closePopup()})).catch((function(e){console.log(e)})).finally((function(){ae.loadingSubmit(!1)}))}});K.addEventListener("click",(function(){ue.disabledPopupBtn(),ae.openPopup()})),ae.setEventListeners();var ce=new i(Z,Q);ce.enableValidation();var le=new m({nameSelector:".profile__name",infoAboutSelector:".profile__job",profileAvatarSelector:".profile__avatar"}),se=new j({popupSelector:".popup_profile_edit",handleFormSubmit:function(e){se.loadingSubmit(!0),te.sendUserInfo(e).then((function(e){le.setUserInfo(e),ce.disabledPopupBtn(),se.closePopup()})).catch((function(e){console.log(e)})).finally((function(){se.loadingSubmit(!1)}))}});J.addEventListener("click",(function(){se.openPopup();var e=le.getUserInfo();z.value=e.name,G.value=e.about})),se.setEventListeners();var pe=new i(Z,Y);pe.enableValidation();var fe=new j({popupSelector:".popup_avatar_edit",handleFormSubmit:function(e){console.log(e),fe.loadingSubmit(!0),te.sendAvatar(e).then((function(e){le.setUserInfo(e),pe.disabledPopupBtn(),fe.closePopup()})).catch((function(e){console.log(e)})).finally((function(){fe.loadingSubmit(!1)}))}});X.addEventListener("click",(function(){fe.openPopup()})),fe.setEventListeners()})();