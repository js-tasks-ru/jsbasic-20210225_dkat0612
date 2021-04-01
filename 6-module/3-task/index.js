import createElement from '../../assets/lib/create-element.js';

function carouselArrowRTemplate(){
  return `<div class="carousel__arrow carousel__arrow_right">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>`;
}

function carouselArrowLTemplate(){
  return `<div class="carousel__arrow carousel__arrow_left">
  <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`;
}

function carouselSlideTemplate(slide) {
  return `<div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`;
}

function innerCarouselTemplate(slides) {
  return `
  <div class="carousel__inner">
    ${slides.map(slide => carouselSlideTemplate(slide)).join('\n')}
  </div>`;
}

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this._slidesCount = this.slides.length;
    this._elem = document.createElement('div');
    this._elem.classList.add('carousel');
    this._elem.insertAdjacentHTML('afterbegin', carouselArrowLTemplate());
    this._elem.insertAdjacentHTML('afterbegin', carouselArrowRTemplate());
    this._elem.insertAdjacentHTML('beforeend', innerCarouselTemplate(this.slides));
    this._initCarousel();
    this._elem.querySelectorAll('.carousel__button')
              .forEach(button => { 
     button.addEventListener('click', (event) =>
        this._onButtonClick(button.closest('.carousel__slide').dataset.id))});  
  }

  get elem() {
    return this._elem;
  }

  _onButtonClick = (slideId) => {
    const event = new CustomEvent("product-add", { 
      detail: slideId, bubbles: true });
    this._elem.dispatchEvent(event);
  }  

  _initCarousel() {
    const rightButton = this._elem.querySelector('.carousel__arrow_right');
    const leftButton = this._elem.querySelector('.carousel__arrow_left');
    const carouselInner = this._elem.querySelector('.carousel__inner');
    let currentSlide = 0;
    leftButton.style.display = 'none';
  
    rightButton.addEventListener('click', () => {
      const innerWidth = carouselInner.offsetWidth;
      carouselInner.style.transform = this._next(innerWidth, ++currentSlide);
      this._update(currentSlide, rightButton, leftButton);
    });
  
    leftButton.addEventListener('click', () => {
      const innerWidth = carouselInner.offsetWidth;
      carouselInner.style.transform = this._next(innerWidth, --currentSlide);
      this._update(currentSlide, rightButton, leftButton);
    });
  }

  _next(innerWidth, currentSlide){
    return `translateX(-${innerWidth *  currentSlide}px)`;
  }

  _update(currentSlide, rightButton, leftButton){
    if(currentSlide === this._slidesCount - 1){
      rightButton.style.display = 'none';
    }else if(currentSlide === 0){
      leftButton.style.display = 'none';
    }else {
      rightButton.style.display = '';
      leftButton.style.display = '';
    }
  }
  
}
