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


    const swiper1 =  document.querySelector ('.swiper-1'),
          swiper1Wrapper = document.querySelector ('.swiper1-wrapper'),

        const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;
      
          breakpoint = window.matchMedia(breakpoint);
      
          const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
      
            if (callback) {
              callback(swiper);
            }
          }
      
          const checker = function() {
            if (breakpoint.matches) {
              return enableSwiper(swiperClass, swiperSettings);
            } else {
              if (swiper !== undefined) swiper.destroy(true, true);
              return;
            }
          };
      
          breakpoint.addEventListener('change', checker);
          checker();
        }
      
        resizableSwiper(
          '(max-width: 1045px)',
          '.slider-2',
          {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            breakpoints: {
              1200: {
                spaceBetween: 20,
              }
            }
          }
        );
})