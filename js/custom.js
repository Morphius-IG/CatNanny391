$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		autoplay:true,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
		stagePadding: 130,
		dots: true,
		nav: true,
		navText: ['<span class="arrow left"></span>','<span class="arrow right"></span></i>'],
		navContainer: '.customNav',
		responsive: {
	    // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
});






$(document).ready(function(){
$("#menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке

event.preventDefault();
//забираем идентификатор бока с атрибута href
var id  = $(this).attr('href'),
	 

//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});
	