$(document).ready(function() {
	
	/* For the sticky navigation */
	
	$('.js--section-features').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px'
	}); 

	
	/* Scroll on buttons */
	$('.js--scroll-to-plans').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});
	
	$('.js--scroll-to-start').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
	});
	
	
	
	/* Navigation Scroll */
	
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	
	/* Animation on scroll */
	
	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});
	
	
	
	/* Mobile nav */
	
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav'); /*create a var nav so you do have to repeat*/
		var icon = $('.js--nav-icon i');/*var for X icon*/
		
		nav.slideToggle(200);/*create the open close effect*/
		if (icon.hasClass('ion-navicon-round')) {/*if icon has this class*/
			icon.addClass('ion-close-round');/*then add this class*/
			icon.removeClass('ion-navicon-round');/*and remove this class*/
		} else {
			icon.addClass('ion-navicon-round');/*else switch around*/
			icon.remove('ion-close-round');
		}
	}); 
	
	/* Maps */
	var map = new GMaps({
		div: '.map',/*changed (#) into (.)class*/
		lat: 38.7436057,
		lng: -9.1,
		zoom: 12
	});/*must be turned into a var inorder for the marker to work*/
	
	map.addMarker({
		lat: 38.7436057,
		lng: -9.2302432,
		title: 'Lisbon',
		infoWindow: {
  			content: '<p>Our Lisbon HQ</p>'
		}
	});
});
				  
				  