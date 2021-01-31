$(function() {
	//=========MENU===========

	$('.burger__bottom').on('click', function() {
		$('.menu-section').addClass('menu-active');
   });

   $('.burger__top').on('click', function() {
		$('.menu').addClass('menu-active');
   });

   $('.header__search').on('click', function() {
		$('.menu-search').addClass('menu-active');
   });
   
   $('.header-menu__close').on('click', function() {
      if($('.menu-section').hasClass('menu-active')){
         $('.menu-section').removeClass('menu-active');
      }
      if($('.menu').hasClass('menu-active')){
         $('.menu').removeClass('menu-active');
      }
      if($('.menu-search').hasClass('menu-active')){
         $('.menu-search').removeClass('menu-active');
      }
   });

   $('.header-menu__mobile').on('click', function() {

      $('.top-menu__link').parent().removeClass('item-active');
    
      $('.menu-course, .menu-type, .language-mobile').slideUp(500);

      $('.submenu-course, .submenu-type').slideUp(500);
   });
   
   $(document).on('scroll', function() {
      
      $('.burger__top').css('background-color', '#ccc');
      $('.burger__bottom').css('background', '#ccc url("../images/icons/arrow-down.png") bottom center no-repeat');
      
   });
   
   $('.bottom-menu__home').on('click', function() {
      if($('.menu').hasClass('menu-active')){
         $('.menu').removeClass('menu-active');
      }
   });
   
   //==============menu=================

   $('.top-menu__link').click(function(e){
      e.preventDefault();

      $('.top-menu__link').parent().removeClass('item-active');
      $(this).parent().addClass('item-active');
      $('.top-menu__link').removeClass('active');
      $('.submenu').not($(this).attr('href')).slideUp(500);
      $('.submenu-open').removeClass('active');
      $('.submenu-menu').slideUp(500);

      $(this).addClass('active');
      $($(this).attr('href')).slideToggle(500);
      
   });

   //============submenu================

   $('.submenu-open').click(function(e){
      e.preventDefault();

      let courseItem = $(this).parent('.menu-course__item');
      let typeItem = $(this).parent('.menu-type__item');

      if(courseItem){
         $('.menu-course__item').not(courseItem).removeClass('current');
         $(courseItem).toggleClass('current');
      }
      if(typeItem){
         $('.menu-type__item').not(typeItem).removeClass('current');
         $(typeItem).toggleClass('current');
      }

      $('.submenu-open').not($(this)).removeClass('active');
      $('.submenu-menu:visible').not($(this).attr('href')).slideUp(500);

      $(this).toggleClass('active');
      $($(this).attr('href')).slideToggle(500);
   });

   //==========slider=============

	$('.slider-programs').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1
   });

   //============footer-menu===================

   $(".blockmenu__open").on('click', function(){
      $(this).toggleClass('active');
      var ansver = $(this).siblings('.blockmenu__list');      
      $('.blockmenu__list:visible').not(ansver).slideUp(400);
      $(".blockmenu__open").not($(this)).removeClass('active');
      ansver.slideToggle(400);         
   });

   //==============hover===================
   $('.menu-course__item').hover(function(e){

      let img = $(this).find('.menu-type__img img');
      let source = $(this).find('.menu-type__img source');
      let imgSrc = img.attr('src');
      let imgFull = img.attr('data-full');
      let imgSrcsetWebp = imgFull.replace('.png', '.webp');

      $(img).attr("src", imgFull);
      $(source).attr("srcset", imgSrcsetWebp);
       
   },function(){

         let img = $(this).find('.menu-type__img img');
         let source = $(this).find('.menu-type__img source');
         let imgSrc = img.attr('src');
         let sourceWebp = source.attr('srcset');
         let imgFull = img.attr('data-full');
         let imgSrcsetWebp = sourceWebp.replace('-hl.webp', '.png');
         let imgSrcWebp = imgSrc.replace('-hl.png', '.png');
         
         $(img).attr("src", imgSrc);
         $(source).attr("srcset", imgSrcsetWebp);
             
   });

   $('.menu-type__item').hover(function(e){

      let img = $(this).find('.menu-type__img img');
      let source = $(this).find('.menu-type__img source');
      let imgSrc = img.attr('src');
      let imgFull = img.attr('data-full');
      let imgSrcsetWebp = imgFull.replace('.png', '.webp');

      $(img).attr("src", imgFull);
      $(source).attr("srcset", imgSrcsetWebp);
       
   },function(){

      let img = $(this).find('.menu-type__img img');
      let source = $(this).find('.menu-type__img source');
      let imgSrc = img.attr('src');
      let sourceWebp = source.attr('srcset');
      let imgFull = img.attr('data-full');
      let imgSrcsetWebp = sourceWebp.replace('-hl.webp', '.png');
      let imgSrcWebp = imgSrc.replace('-hl.png', '.png');
      
      $(img).attr("src", imgSrc);
      $(source).attr("srcset", imgSrcsetWebp);
              
   });

   //=========active=============
   
});

   //=============popup=====================

   const closeBtn = document.querySelectorAll('.popup__close');   
   const openBtns = document.querySelectorAll('.program-link');
   const popup = document.querySelector('.popup');
   const body = document.querySelector('body');
   const lockPadding = document.querySelectorAll(".lock-padding");

   let unlock = true;
   const timeout = 800;
   
   openBtns.forEach(function(el) {  
      el.addEventListener('click', function(e){
         popupOpen();
      });
   });   

   function popupOpen() {
      if (unlock) {
         bodyLock();
      }
      popup.classList.add('_active');
      popup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
   };

   closeBtn.forEach(function(el) {
      el.addEventListener('click', function(e){
         popupClose();
      });
   });

   function popupClose() {
      popup.classList.remove('_active');
      bodyUnLock();
   };

   function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.popup-wrapper').offsetWidth + 'px';
   
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
         }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');
   
      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }
   
   function bodyUnLock() {
      setTimeout(function () {
         if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
               const el = lockPadding[index];
               el.style.paddingRight = '0px';
            }
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock');
      }, timeout);
   
      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }


//===============compare=============
const compare = document.querySelector('.compare');
const compOpen = document.querySelectorAll('.program-compare');
const compClose = document.querySelector('.compare__close');

compOpen.forEach(function(el) {  
   el.addEventListener('click', function(e){
      compare.classList.add('open');
   });
});
compClose.addEventListener('click', function(e){
   compare.classList.remove('open');
});

//===========price=============
$(function() {
   const price = document.querySelector('.question-program-price__body');
   const priceClose = document.querySelector('.question-program-price__close');
   const question = document.querySelector('.question-program-price__top p');
   
   $(priceClose).on('click', function() {
      $(price).slideToggle(500);
      if ($(priceClose).hasClass('active')) {
         $(priceClose).removeClass('active');
      } else {
         $(priceClose).addClass('active');
      }
      if ($(question).hasClass('current')) {
         $(question).removeClass('current');
      } else {
         $(question).addClass('current');
      }
      
   });
});
//==================video========

const videos = document.querySelectorAll('.video-program__box');

// generate video url
let generateUrl = function (id) {
	let query = '?rel=0&showinfo=0&autoplay=1';
	return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function (id) {
	let iframe = document.createElement('iframe');
	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay; encrypted-media');
	iframe.setAttribute('src', generateUrl(id));
   return iframe;
};

// main code
videos.forEach(function(el) {
	let videoHref = el.getAttribute('data-video');
	let deletedLength = 'https://youtu.be/'.length;
   let videoId = videoHref.substring(deletedLength, videoHref.length);   
   let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
   
   let createImg = function () {
      let image = document.createElement('img');
      image.setAttribute('src', youtubeImgSrc);
      return image;
   };
   
   el.appendChild(createImg());

	el.addEventListener('click', function(e) {
      e.preventDefault();

         let iframe = createIframe(videoId);
         el.querySelector('img').remove();
         el.appendChild(iframe);
         el.classList.add('video__bg');
         el.querySelector('.video-program__btn').remove();     
	});
});
