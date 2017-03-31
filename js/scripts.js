// JavaScript Document

//PRZEJŚCIE DO KOTWICY

$(document).ready(function() {
    $('.anchor').click(function() {
        var hash = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 1000);
        return false;
    });
});


//POWIĘKSZANIE ZDJĘCIA

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}		
	});
});
