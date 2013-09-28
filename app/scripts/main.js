!function ($) {
    // Handler for .ready() called
    $(function(){
        // carousel demo
        $('#myCarousel').carousel({
          interval: 1000000
        });
        console.log('Initialized Carousel with 4.5 second interval:');
        console.log('[  $(\'#myCarousel\').carousel({ interval: 4500 });  ]');
    });
}(window.jQuery);
