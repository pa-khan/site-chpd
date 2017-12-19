$(document).ready(function($) {

	/* Phone mask */
	$('.input.input_phone input').mask('+7 (999) 999-99-99');


	$('.production__list').slick({
		slidesToShow: 4,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="/upload/icons/arrow-left.png" /></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="/upload/icons/arrow-right.png" /></button>',
		responsive: [{
			breakpoint: 1250,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 970,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	var nav = $('.panel__nav');

	$('.panel__button').click(function(event) {
		$(this).toggleClass('panel__button_toggle');
		nav.toggleClass('panel__nav_toggle');
	});
});