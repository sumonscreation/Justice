(function($) {
    "use strict";

    /*------------------------------------
        01. Menu
    ------------------------------------- */
    var win = $(window);
    var stic = $(".header-sticky");
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            stic.removeClass("sticky");
        } else {
            stic.addClass("sticky");
        }
    });

    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });

    /*------------------------------------
        Menu-toggle
    ------------------------------------- */
    var tog = $('.menu-toggle');
    var mnav = $('.main-menu nav');
    tog.on('click', function() {
        if (tog.hasClass('is-active')) {
            mnav.removeClass('menu-open');
        } else {
            mnav.addClass('menu-open');
        }
    });

    /*------------------------------------
        02. Owl Carousel
    ------------------------------------- */
    $(".law-owl-slider").owlCarousel({
        autoPlay: 8000,
        items: 1,
        slideSpeed: 500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        pagination: true,
        navigation: false,
        loop: true,
        mouseDrag: true,
        singleItem: true,
        transitionStyle: "fade",
        transitionStyle: "fade",
        addClassActive: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
    
    
    /*------------------------------------
        Team Carousel
    ------------------------------------- */
    $('.team-owl').owlCarousel({
        loop: true,
        autoPlay: false,
        smartSpeed: 2000,
        fluidSpeed: true,
        items: 4,
        responsiveClass: true,
        nav: false,
        pagination: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    
    
    /*------------------------------------
        News Carousel
    ------------------------------------- */
    $('.news-owl').owlCarousel({
        autoPlay: false,
        loop: true,
        slideSpeed: 2000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    
    
    /*--------------------------------
    	Testimonial Slick Carousel
    -----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    /*------------------------------------
    	Testimonial Slick Carousel as Nav
    --------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [{
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    
    /*------------------------------------
        03. Mail Chimp
    --------------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }
    
    
    /*--------------------------
        04. Magnific Popup
    ---------------------------- */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    
    /*--
        Odometer Activation 
    -----------------------------------*/
    if( $('.odometer').length ){

		var elemOffset = $('.odometer').offset().top;
		var winHeight = $(window).height();
		if(elemOffset < winHeight){
			$('.odometer').each(function(){
				$(this).html($(this).data('count-to'));
			});
		}
		$(window).on('scroll', function(){
			var elemOffset = $('.odometer').offset().top;
			function winScrollPosition() {
				var scrollPos = $(window).scrollTop(),
					winHeight = $(window).height();
				var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
				return scrollPosition;
			}
			if ( elemOffset < winScrollPosition()) {
				$('.odometer').each(function(){
					$(this).html($(this).data('count-to'));
				});
			}	
		});
    };
    
    
    /*-------------------------------------------
    06. ScrollUp jquery
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    

})(jQuery);