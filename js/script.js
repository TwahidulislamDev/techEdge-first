// Service Card Sart
$(".serviceSlider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
  ]
});
// Service Card End 
// Power Section Start 
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// Power Section End 