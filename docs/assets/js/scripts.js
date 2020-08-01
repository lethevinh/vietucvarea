/*
Author       : themes_master
Template Name: Lalvai - Landing Page HTML Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() {  
			// $('.spinner').fadeOut();
			// $('.preloader').delay(350).fadeOut('slow');
		}); 
		/*END PRELOADER JS*/
		$('.lazy').lazy({placeholder:'',defaultImage:''});
		/*START MENU JS*/		
			 if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 100 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});				
		/*END MENU JS*/		
		
		/*START HOME WATER JS*/
		  if (typeof $.fn.ripples == 'function') {
				try {
					$('.ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
		/*END HOME WATER JS*/

		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/
			
		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/	
				
		/*START PORTFOLIOS JS*/	
		$("#work-slider").owlCarousel({
		   items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:false,
			navigation:true,
			slideSpeed:1000,
			autoPlay:false,
			nav: true,
			navigationText: ["<img src='assets/images/prev.png'>","<img src='assets/images/next.png'>"]
		});
		/*END PORTFOLIOS JS*/	
		
		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/				
		
	}); 			
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */	

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/
	$('.btn-register-b').click(function (e) {

		let form = $(this).parents('form');
		let data = form.serializeArray();
		if (data.every(item => item.value)) {
			$.post('/', data)
				.done(function () {
					// alert("second success");
				})
				.fail(function () {
					// alert("error");
				})
				.always(function () {
					$('#exampleModal').modal('hide');
					$('#thankModal').modal('show');
					form.get(0).reset();
				});
			e.stopPropagation();
			e.preventDefault();
		}
	});
	$('.btn-register-a').click(function (e) {
		let form = $(this).parents('form');
		let data = form.serializeArray();
		if (data.every(item => item.value)) {
			$.post('/', data)
				.done(function () {
					// alert("second success");
				})
				.fail(function () {
					// alert("error");
				})
				.always(function () {
					$('#thankModal').modal('show');
					form.get(0).reset();
				});
			e.stopPropagation();
			e.preventDefault();
		}
	});
})(jQuery);


  

