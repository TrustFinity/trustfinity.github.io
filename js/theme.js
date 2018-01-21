jQuery(function($) {
  "use strict";

// jQuery to collapse the navbar on scroll

 $(function(){
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


    $("#client-carousel").owlCarousel({

      slideSpeed : 400,
      pagination:true,
      items : 5,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet:[768,3],    //As above.
      itemsMobile:[320,1],
      stopOnHover:true,
      autoPlay:true

    });


//Counter 
  

  $(window).load(function() {
      $('.flexslider').flexslider({
        animation: "fade",
        direction: "vertical",
        controlNav: false,
         slideshowSpeed: 8000
      });
    });



//  ============= count  =============
       $('.count').counterUp({
            delay: 100,
            time: 2000
        });

  });