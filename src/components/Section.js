export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(itemCards) {
    this.clear();
    itemCards.forEach(item => {
      this._renderer(item);
    });
  }
}
