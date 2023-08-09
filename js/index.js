new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true'
    },
    breakpoints: {
      1189: {
        slidesPerView: 3
      }
    }
  });
  