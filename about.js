var sponsored = $('.sponsored-carousel');
        sponsored.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });


        var owl1 = $('.new-carousel');
        owl1.owlCarousel({
            items:3,
            loop:false,
            margin:10,
            nav:false,
            dots:false,
            autoplay:false,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        $('.btn-next1').click(function() {
            owl1.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.btn-prev1').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl1.trigger('prev.owl.carousel', [300]);
        })