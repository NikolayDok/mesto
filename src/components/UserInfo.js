export default class UserInfo {
  constructor({ nameSelector, infoAboutSelector }) {
    this._name = document.querySelector(nameSelector);
    this._infoAbout = document.querySelector(infoAboutSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.infoAbout = this._infoAbout.textContent;
    return this._userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._infoAbout.textContent = data.job;
  }
}
