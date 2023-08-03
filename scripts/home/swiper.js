// init Swiper:
export default swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  direction: "horizontal",
  loop: false,
  slidesPerView: "auto",
  resizeReInit: true,
  slidesOffsetAfter: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
