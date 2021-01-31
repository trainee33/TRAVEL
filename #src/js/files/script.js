$(function() {
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function() {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}

	testWebP(function(support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	function ibg() {
		let ibg = document.querySelectorAll('._ibg');
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	ibg();
});

$(function() {
	//=========MENU===========

	$('.menu-page__burger').on('click', function() {
		$(this).toggleClass('active');
		$('.bottom-header__menu').toggleClass('active');
	});

	$('.header-catalog__menu').on('click', function() {
		$(this).toggleClass('active');
		$('.header-catalog__body').slideToggle('active');
	});

	$('.header-catalog__link').on('click', function(e) {
		e.preventDefault();
		var ansver = $(this).next();
		let submenu = $('.header-catalog__submenu');
		submenu.not(ansver).removeClass('active');
		ansver.toggleClass('active');
	});

	//=======================

	if ('.banner-slider') {
		$('.banner-slider').slick({
			infinite: true,
			arrows: true,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	if ('.bestsellers-slider') {
		$('.bestsellers-slider').slick({
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
		});
	}

	if ('.know-slider') {
		$('.know-slider').slick({
			infinite: true,
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 560,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true
					}
				}
			]
		});
	}
	//=============popup===================

	$('.reg-enter').on('click', function() {
		$('.popup-enter').addClass('_active');
	});
	$('.popup__form_close').on('click', function() {
		$('.popup-enter').removeClass('_active');
	});

	$('.popup__form_registr span').on('click', function() {
		$('.popup-enter').removeClass('_active');
		$('.popup-reg').addClass('_active');
	});
	$('.popup__form_close').on('click', function() {
		$('.popup-reg').removeClass('_active');
	});

	$('.reg').on('click', function() {
		$('.popup-reg').removeClass('_active');
		$('.popup-enter').addClass('_active');
	});
	$('.popup__form_close').on('click', function() {
		$('.popup-enter').removeClass('_active');
	});
});
