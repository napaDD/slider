$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		speed:600,
		asNavFor: '.sliderContent',
	});

	$('.sliderContent').slick({
     arrows: false,
		 slidesToShow:1,
		 asNavFor: '.slider',
	});
});

