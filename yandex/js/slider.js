document.addEventListener('DOMContentLoaded', function() {
    let position = 0,
        counter = 1;

    const slideToShow = 3,
        slideToScroll = 1,
        container = document.querySelector('.participants__swiper'),
        track = document.querySelector('.swiper-wrapper'),
        items = document.querySelectorAll('.swiper__slide'),
        btnPrev = document.querySelector('.swiper-button-prev'),
        btnNext = document.querySelector('.swiper-button-next'),
        btnColor = document.getElementsByClassName('.swiper__btn'),
        btnColorDisabled = document.getElementsByClassName('.swiper__color-disabled'),
        itemWidth = container.clientWidth / slideToShow,
        movePosition = slideToScroll * itemWidth,
        itemCount = document.querySelectorAll('.swiper__slide').length,
        swiperCounter = document.querySelector('.swiper__span');

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
        
    })
    // кнопки
    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnNext.addEventListener('click',() => {
        const itemsLeft = itemCount - (Math.abs(position) + slideToShow *itemWidth) / itemWidth
        position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        if (btnPrev.disabled === true) 
            {btnPrev.style.backgroundColor = '#D6D6D6'} 
        if (btnPrev.disabled === false) {
            btnPrev.style.backgroundColor = '#313131'
        };

        btnNext.disabled = position <= -(itemCount - slideToShow) * itemWidth;
        if (btnNext.disabled === true) 
            {btnNext.style.backgroundColor = '#D6D6D6'}
        if (btnNext.disabled === false) 
            {btnNext.style.backgroundColor = '#313131'};
    }

    checkBtns();


    const swiper1 =  document.querySelector ('.stages__swiper'),
          swiperLine = document.querySelector ('.stages__lists'),
          sliderItem = document.querySelectorAll('.stages__item'),
          sliderDots = document.querySelectorAll ('.stages__slider-dot'),
          sliderBtnNext = document.querySelector('.stages-button-next'),
          sliderBtnPrev = document.querySelector('.stages-button-prev');

      // переменные
      let sliderCount = 0,
          sliderWidth;

  window.addEventListener('resize', showSlide);

  // кнопки
    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

  function showSlide () {
    sliderWidth = document.querySelector('.stages__item').offsetWidth;
    swiperLine.style.width = sliderWidth * swiperLine.length + `px`;
    sliderItem.forEach(item => item.style.width = sliderWidth + `px`);

    rollSlider()
  }
  showSlide ();
  
  function nextSlide() {
    sliderCount ++;
    if (sliderCount  >= sliderItem.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount)
  }

  function prevSlide() {
    sliderCount --;
    if (sliderCount < 6) sliderCount = sliderItem.length;

    rollSlider();
    thisSlide(sliderCount)
  }

  // шаг перемещения слайдов
  function rollSlider() {
    swiperLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }

  function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
  }
})