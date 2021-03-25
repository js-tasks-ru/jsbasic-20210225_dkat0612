const SLIDE_COUNT = 4;

function initCarousel() {
  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const innerWidth = carouselInner.offsetWidth;
  let currentSlide = 0;
  leftButton.style.display = 'none';

  rightButton.addEventListener('click', () => {
    carouselInner.style.transform = 'translateX(-' + innerWidth *  ++currentSlide + 'px)';
    if(currentSlide === SLIDE_COUNT - 1){
      rightButton.style.display = 'none';
    }else {
      rightButton.style.display = '';
      leftButton.style.display = '';
    }
  });

  leftButton.addEventListener('click', () => {
    carouselInner.style.transform = 'translateX(-' + innerWidth *  --currentSlide + 'px)';
    if(currentSlide === 0){
      leftButton.style.display = 'none';
    }else{
      rightButton.style.display = '';
      leftButton.style.display = '';
    }
  });
}
