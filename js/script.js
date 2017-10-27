$ = jQuery;

$( document ).ready(function() {
	initPhotoSwipeFromDOM('#my-gallery');
	initPhotoSwipeFromDOM('#udigital-gallery');

	$( "#show12u12" ).click(function() {
		$( "#my-gallery" ).toggle( "slow", function() {
			// Animation complete.
		});
	});

	$( "#showudigital" ).click(function() {
		$( "#udigital-gallery" ).toggle( "slow", function() {
			// Animation complete.
		});
	});

});