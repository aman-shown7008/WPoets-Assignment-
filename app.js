$(document).ready(function(){
  $('#hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots: false,
    responsive:{
        0:{

        },
        600:{

        },
        1000:{

        }
    }
})
});

function scrollToTop(){
  window.scrollTo(0, 0);
}
