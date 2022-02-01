
$(function(){
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        nextArrow: '.up',
        prevArrow: '.down',
        vertical: true,
        autoplaySpeed: 200000,
        pauseOnHover:false,
        centerMode:true,
        centerPadding: false
      });



      $('.mentors_slider_image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        nextArrow: '.up2',
        prevArrow: '.down2',
        vertical: true,
        autoplaySpeed: 2000000,
        pauseOnHover:false,
        centerMode:true,
        centerPadding: false,
        asNavFor: '.mentors_details_slider',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              vertical: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              vertical: false,
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 3,
              vertical: false,
            }
          }
        ]
      });
      $('.mentors_details_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        pauseOnHover:false,
        asNavFor:'.mentors_slider_image',
        autoplaySpeed: 2000000,
        
      });


      $('.run_num').counterUp({
        delay: 50,
        time: 3000
    });
})