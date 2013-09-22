!function ($) {
    // Handler for .ready() called
    $(function(){
        // carousel demo
        $('#myCarousel').carousel({
          interval: 10000
        });
        console.log('Initialized Carousel with 2 second interval:');
        console.log('[  $(\'#myCarousel\').carousel({ interval: 2000 });  ]');
    });
}(window.jQuery);
