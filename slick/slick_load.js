$(document).ready(function(){
      $('.slideshow-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 2,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 600,
            lazyLoad: 'ondemand',
            mobileFirst: true,
            swipeToSlide: true,
            swipeToSlide: true,
            touchThreshold: 30,
            waitForAnimate: false 
        });
});
