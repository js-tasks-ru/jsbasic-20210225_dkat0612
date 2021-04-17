import createElement from '../../assets/lib/create-element.js';

function ribbonArrowTemplate(arrowClass){
  return `<button class="ribbon__arrow ${arrowClass}">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>`;
}

function innerRibbonTemplate(categories) {
  return `
  <nav class="ribbon__inner">
    ${categories.map(category => ribbonCategoryTemplate(category)).join('\n')}
  </nav>`;
}

function ribbonCategoryTemplate(category) {
  return `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
}

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.RIBBON_LENGTH = 350;
    this._elem = createElement(
      `<div class="ribbon">
      ${ribbonArrowTemplate('ribbon__arrow_left')}
      ${innerRibbonTemplate(this.categories)}
      ${ribbonArrowTemplate('ribbon__arrow_right')}
      </div>`
    );
    this._rightButton = this._elem.querySelector('.ribbon__arrow_right');
    this._leftButton = this._elem.querySelector('.ribbon__arrow_left');
    this._ribbonInner = this._elem.querySelector('.ribbon__inner');
    this._initRibbon();
    this._elem.querySelectorAll('.ribbon__item').forEach(item => 
      { item.addEventListener('click', (event) => {
        event.preventDefault();
        this._onItemClick(item);
      });
    });
}

  get elem() {
    return this._elem;
  }

  _onItemClick = (item) => {
    this._ribbonInner.querySelector('.ribbon__item_active')
        .classList.remove('ribbon__item_active');
    item.classList.add('ribbon__item_active');
    const event = new CustomEvent("ribbon-select", { 
      detail: item.dataset.id, bubbles: true });
    this._elem.dispatchEvent(event);
  }  

  _initRibbon() {
    this._rightButton.classList.add('ribbon__arrow_visible');
    this._ribbonInner.querySelector('.ribbon__item').classList.add('ribbon__item_active');
  
    this._rightButton.addEventListener('click', () => {
      this._ribbonInner.scrollBy(this.RIBBON_LENGTH, 0);
    });
  
    this._leftButton.addEventListener('click', () => {
      this._ribbonInner.scrollBy(-this.RIBBON_LENGTH, 0);
    });

    this._ribbonInner.addEventListener('scroll', () => {
      this._setVisibilityLeft();
      this._setVisibilityRight();
    });
  }
  
  _setVisibilityRight(){
    const scrollLeft = this._ribbonInner.scrollLeft;
    if(scrollLeft !== 0){
      this._leftButton.classList.add('ribbon__arrow_visible');
    } else{
      this._leftButton.classList.remove('ribbon__arrow_visible');
    }
  }

  _setVisibilityLeft(){
    const scrollWidth = this._ribbonInner.scrollWidth;
    const scrollLeft = this._ribbonInner.scrollLeft;
    const clientWidth = this._ribbonInner.clientWidth;
    const scrollRight = scrollWidth - scrollLeft - clientWidth;
    if(scrollRight <= 1 ){
      this._rightButton.classList.remove('ribbon__arrow_visible');
    } else{
      this._rightButton.classList.add('ribbon__arrow_visible');
    }
  }

}
