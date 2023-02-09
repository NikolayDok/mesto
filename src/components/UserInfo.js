export default class UserInfo {
  constructor({ nameSelector, infoAboutSelector, profileAvatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._infoAbout = document.querySelector(infoAboutSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.about = this._infoAbout.textContent;
    return this._userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._infoAbout.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
