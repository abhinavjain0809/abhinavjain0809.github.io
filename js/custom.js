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
	}
  });
});
