const SLIDE_COUNT = 4;

function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const innerWidth = carouselInner.offsetWidth;
  let currentSlide = 0;
  leftButton.style.display = 'none';

  rightButton.addEventListener('click', () => {
    carouselInner.style.transform = next(innerWidth, ++currentSlide);
    update(currentSlide, rightButton, leftButton);
  });

  leftButton.addEventListener('click', () => {
    carouselInner.style.transform = next(innerWidth, --currentSlide);
    update(currentSlide, rightButton, leftButton);
  });
}

function next(innerWidth, currentSlide){
  return `translateX(-${innerWidth *  currentSlide}px)`;
}

function update(currentSlide, rightButton, leftButton){
  if(currentSlide === SLIDE_COUNT - 1){
    rightButton.style.display = 'none';
  }else if(currentSlide === 0){
    leftButton.style.display = 'none';
  }else {
    rightButton.style.display = '';
    leftButton.style.display = '';
  }
}

