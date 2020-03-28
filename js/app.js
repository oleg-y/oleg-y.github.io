

/**********************************************/

/* Show "scroll to top" button */
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.to-top').fadeIn();
	} else {
		$('.to-top').fadeOut('fast');
	}
});

/* Scroll to top */
$('.to-top').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
});



    
		
