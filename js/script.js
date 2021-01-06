$(function(){

	$('.slider').slick({
        arrows: true,
		dots: false,

		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,

		adaptiveHeight: true,

		
		autoplay: false,
		autoplaySpeed: 5000,

		responsive: [
			{
				breakpoint: 992,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			}
		]
	});
	
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('block');
	});

	$('#callme').click(function(event){
		$('.popup-container').toggleClass('active');
		$('body').toggleClass('block');
	});

	$('.popup__button, #callme-mobile, #form__btn-cancel, .contact__button').click(function(event){
		$('.header__burger, .header__menu').removeClass('active');
		$('.popup-container').toggleClass('active');
		$('body').toggleClass('block');
	});


	$('.header__menu a').on('click', function() { // плавная прокрутка

		let href = $(this).attr('href');
	
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 500,   // по умолчанию «400» 
			easing: "linear" // по умолчанию «swing» 
		});
	
		return false;
	});
		


	/*$('#callme').click(function(){
		//$('.popup-container').show();
		$('.popup-container').fadeIn(400);
		$('.popup').animate({
			width:'700px',
			height: '500px',
		}, 400);
	});

	$('.popup-container').click(function(event){
		if(event.target == this){
			//$(this).hide();
			$(this).fadeOut(400);
			$('.popup').animate({
				width:'0',
				height: '0',
			}, 400);
		}	
	});*/

});