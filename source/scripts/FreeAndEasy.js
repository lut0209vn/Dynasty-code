'use strict';
/* ==========================================================================
navbar-toggle
========================================================================== */
$('.md-slider-block').owlCarousel({
  stagePadding: 0,
  smartSpeed:700,
  loop:true,
  margin:10,
  nav:false,
  items:3,
  nav:true,
  responsive : {
    0 : {
      stagePadding: 50,
    },
    480 : {
      stagePadding: 70,
      items:1,
    },
    768 : {
      stagePadding: 60,
      items:2,
    },
    992 : {
      stagePadding: 60,
      items:3,
    }
  }
});
$('.back-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/* ==========================================================================
Travel-Store-Shopping-Cart
========================================================================== */
$(".list-cart .ico-close").click(function(){
  $(this).parents(".cart-item").remove();
});
$(".list-cart .clear-all").click(function(){
 $(".list-cart .cart-item").remove();
});
$('.ui.checkbox').checkbox();
