$('#branch-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    center:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0:{
        items:1
      },
      345:{
        items:1.1
      },
      399:{
        items:1.2
      },
      471: {
        items: 1.5
      },
      620: {
        items: 2
      },
      840: {
        items: 3
      },
  
      1120: {
        items: 4
      }
    }
  });