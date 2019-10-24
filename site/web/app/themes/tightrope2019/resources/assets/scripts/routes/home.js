export default {
  init() {
    // JavaScript to be fired on the home page

    

    //Carousel
    $('.slides').slick({
      centerMode: true,
      centerPadding: '25%',
      slidesToShow: 1,
      prevArrow: '.prevArrow',
      nextArrow: '.nextArrow',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '40px',
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '40px',
          },
        },
      ],
    });
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
