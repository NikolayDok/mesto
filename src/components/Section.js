export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
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
    this._arrCards = itemCards;
    this._arrCards.forEach(item => {
      this._renderer(item);
    });
  }
}
