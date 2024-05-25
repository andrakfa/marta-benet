{
    var swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.novelties__next-btn',
        prevEl: '.novelties__prew-btn',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });
  
    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
      return direction;
    }
  }
  //слайдер novelties


  function btn(){
    alert("эта кнопка еще не работает");
  }
  
  document.querySelector(".info__discover-btn").addEventListener("click", btn);
  document.querySelector(".info__more-btn").addEventListener("click", btn);
  document.querySelector(".menu__btn").addEventListener("click", btn);
  document.querySelector(".services__btn").addEventListener("click", btn);