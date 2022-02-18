// client logo carousel

$(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  
  $('#logos-carousel2').owlCarousel({
    loop: true,
    center: false,
    items: 5,
    margin: 0,
    autoplay: true,
    dots:false,
    touchDrag  : false,
    mouseDrag  : true,
    smartSpeed: 1500,
    responsive: {
      480: {
        items: 1,
        center: true,
      },
      768: {
        items: 3
      },
      1170: {
        items: 5
      }
    }
  });
});