import createElement from '../../assets/lib/create-element.js';

function cardTopTemplate(product) {
  return `<div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${(product.price).toFixed(2)}</span>
  </div>`;
}

function cardBodyTemplate(product) {
  return `
  <div class="card__body">
  <div class="card__title">${product.name}</div>
  <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
  </button>
</div>`;
}

export default class ProductCard {
  constructor(product) {
    this._product = product;
    this._elem = document.createElement('div');
    this._elem.classList.add('card');
    this._elem.insertAdjacentHTML("afterbegin", cardBodyTemplate(this._product));
    this._elem.insertAdjacentHTML("afterbegin", cardTopTemplate(this._product));
    const buttonAdd = this._elem.querySelector('button');
    buttonAdd.addEventListener('click', this._onButtonClick)
  }

  _onButtonClick = () => {
    const event = new CustomEvent("product-add", { 
      detail: this._product.id, bubbles: true });
    this._elem.dispatchEvent(event);
  }  
  
  get elem() {
    return this._elem;
  }
}
