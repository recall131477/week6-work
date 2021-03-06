(function ($) {
  const goAos = () => {
    AOS.init({
      once: true
    });
  };
  const goSwiper = () => {
    const cardSwiper = new Swiper('.card .swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {  // 自動撥放
        delay: 3000,
        disableOnInteraction: false, // 用手操控swiper後一樣會自動輪播
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    });
  }

  const goModal = () => {
    $('.header__link').on('click', function () {
      $('.modal').toggleClass('is-active');
      $('body').toggleClass('overflow-hidden');
    });
  };

  $(function () {
    goAos();
    goSwiper();
    goModal();
  });
})(jQuery);
