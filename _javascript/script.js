var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  /*loop: true,*/
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2.5,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
