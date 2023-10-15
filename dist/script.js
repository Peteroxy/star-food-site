var swiper = new Swiper(".slide-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  sliderPerGroup: "auto",
  slidesOffsetAfter: 0,
  loopFillGroupBlank: false,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  // observer: true,
  // observeParents: true,
  // on: {
  //   init: function () {
  //     this.update();
  //   }
  // },
  cssMode: 'true',
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,

  //   },
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   375: {
  //     slidesPerView: 1,
  //   },
  //   425: {
  //     slidesPerView: 1,
  //   },
  //   520: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //   },
  // },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    0 : {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  },
});


