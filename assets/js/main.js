(function ($) {
	"use strict";
    jQuery(document).ready(function($){

		/*=========================
  		Meanmenu-active
		===========================*/
		$('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "992"
		});


		/*=========================
  		Sticky
		===========================*/
		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 300) {
				$("#header-sticky").removeClass("sticky-menu");
			} else {
				$("#header-sticky").addClass("sticky-menu");
			}
		});


		/*=========================
  		One Page Nav
		===========================*/
		var top_offset = $('.header-area').height() - 10;
		$('.main-menu nav ul').onePageNav({
			currentClass: 'active',
			scrollOffset: top_offset,
		});


		/*=========================
  		OwlCarousel-slider
		===========================*/
		$('.explore-slide-active').owlCarousel({
		    loop:true,
		    margin: 10,
			items:5,
			navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
		    nav:true,
			dots:false,
			autoplayTimeout:3000,
	    	smartSpeed:1000,
		    responsive:{
		        0:{
		            items:2
		        },
		        767:{
		            items:3
		        },
		        992:{
		            items:5
		        }
		    }
		})


		/*=========================
  		NiceSelect
		===========================*/
		$('select').niceSelect();


		/*=========================
		 MagnificPopup video-view
		===========================*/
		$('.video-btn').magnificPopup({
			type: 'iframe'
		});


		/*=========================
  		ScrollUp-js
		===========================*/
		$.scrollUp({
			scrollName: 'scrollUp',
			topDistance: '300',
			topSpeed: 300,
			animation: 'fade',
			animationInSpeed: 200,
			animationOutSpeed: 200,
			scrollText: '<i class="far fa-level-up-alt"></i>',
			activeOverlay: false,
		});


    });


    jQuery(window).load(function(){});
}(jQuery));	