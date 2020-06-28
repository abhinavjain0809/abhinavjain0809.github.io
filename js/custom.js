// Event listeners
$(document).ready(function() {
  	
  	$('#fullpage').fullpage({
	    // licenseKey: 'abcd1234-abcd1234-abcd1234-abcd1234'
		licenseKey: '8znZmcG#a5',
	    responsiveWidth: 700,
		responsiveHeight: 600,
		// scrollingSpeed: 450,
		loopBottom: true,
		loopHorizontal: true,

		// Called every time page changes
		onLeave: function(origin, destination, direction) {
			$("#navbar ." + origin.anchor + "-navbar-option").removeClass('selected-navbar-option');
			$("#navbar ." + destination.anchor + "-navbar-option").addClass('selected-navbar-option');

			// Show category dropdown only on blog page
			if (destination.anchor == 'blog-page') {
				$('#blog-category-wrapper').removeClass('hide');
			} else {
				$('#blog-category-wrapper').addClass('hide');
			}
		}
  	});

  	// Called when cycling through categories on the blogs page
  	$('.blog-category-select').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
  		var imgName = 'blog_' + clickedIndex + '_bg.jpg';
  		document.getElementById("blog").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.1)), url('resources/img/" + imgName + "')";
	});
});