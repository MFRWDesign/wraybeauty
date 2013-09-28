!function ($) {
    // Handler for .ready() called
    $(function(){
        // carousel demo
        $('#myCarousel').carousel({
          interval: 3000
        });
        console.log('Initialized Carousel with 4 second interval:');
        console.log('[  $(\'#myCarousel\').carousel({ interval: 4000 });  ]');
    });
}(window.jQuery);
