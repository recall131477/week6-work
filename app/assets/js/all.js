(function ($) {
  const goSwiper = new Swiper('.card .swiper-container', {
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
  })
  $(function () {
    goSwiper();
  });
})(jQuery);
