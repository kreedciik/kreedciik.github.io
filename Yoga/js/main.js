$(document).ready(function(){

	$('.wrap').slick({

		infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 2000,
       	 responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                autoplay: true,
                infinite: true
              }
          }]
	});

	

});