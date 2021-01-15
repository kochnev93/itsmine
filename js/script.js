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
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('block');

		let href = $(this).attr('href');
	
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 500,   // по умолчанию «400» 
			easing: "linear" // по умолчанию «swing» 
		});
	
		return false;
	});


	
//JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}  
testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

});