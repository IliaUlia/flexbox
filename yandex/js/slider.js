document.addEventListener('DOMContentLoaded', function() {
    let position = 0,
        counter = 1;

        let slideToShow = 3;
    const slideToScroll = 1,
        counters = document.querySelectorAll('[data-counter]'),
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

        console.log(itemCount)

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
        
    })

  window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth < 1200) {

    }
  })

    // кнопки
    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        
        if (counter >= 1) {
        --counter
         swiperCounter.innerHTML = `${counter}`;
        } 
        setPosition();
        checkBtns();
    });

    btnNext.addEventListener('click',() => {
        const itemsLeft = itemCount - (Math.abs(position) + slideToShow *itemWidth) / itemWidth
        position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        counter++
        if (counter <= itemCount) {

          swiperCounter.innerHTML = `${counter}`
        }
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


// слайдер stages
      
if((window).innerWidth < 1200) {
   /* Инициализация слайдера */ 

    const swiperLine = document.querySelector ('.stages__lists'),
          sliderItem = document.querySelectorAll('.stages__item'),
          sliderDots = document.querySelectorAll ('.stages__slider-dot'),
          sliderBtnNext = document.querySelector('.stages-button-next'),
          sliderBtnPrev = document.querySelector('.stages-button-prev');

      // переменные
      let sliderCount = 0,
          sliderWidth;
          
       // кнопки
    sliderBtnNext.addEventListener('click', nextSlide);
    sliderBtnPrev.addEventListener('click', prevSlide);

  function showSlide () {
    sliderWidth = document.querySelector('.stages__item').offsetWidth;
    swiperLine.style.width = sliderWidth / sliderItem.length + `px`;
    sliderItem.forEach(item => item.style.width = sliderWidth + `px`);
    rollSlider()
    thisSlide(sliderCount)
  }
  showSlide ();
  
  function nextSlide() {
    sliderCount ++;
    if (sliderCount  >= sliderItem.length - 2) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount)
  }

  function prevSlide() {
    sliderCount --;
    if (sliderCount == sliderItem.length) sliderCount = sliderItem.length

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

  //клик на dot
  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      sliderCount - index;
      rollSlider();
      thisSlide(sliderCount);
    })
  })
}
})
