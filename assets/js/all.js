"use strict";

(function ($) {
  var goSwiper = function goSwiper() {
    var cardSwiper = new Swiper('.card .swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        // 自動撥放
        delay: 3000,
        disableOnInteraction: false // 用手操控swiper後一樣會自動輪播

      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
  };

  var goModal = function goModal() {
    $('.header__link').on('click', function () {
      $('.modal').toggleClass('is-active');
      $('body').toggleClass('overflow-hidden');
    });
  };

  $(function () {
    goSwiper();
    goModal();
  });
})(jQuery);
//# sourceMappingURL=all.js.map
