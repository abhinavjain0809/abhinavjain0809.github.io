// Event listeners

// Scroll to top of page on page reload
$(window).bind('beforeunload',function() {
	$(this).scrollTop(0);
});

// Page scroll listener
$(window).scroll(function() {
	var el = $('.end-parallax');
	var elementTop = el.offset().top;
  var elementBottom = elementTop + el.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  var currentHeightOfElementVisibileOnScreen = viewportBottom - elementTop;
  
	if (currentHeightOfElementVisibileOnScreen >= $(window).height()*0.75 && elementBottom > viewportTop && elementTop < viewportBottom) {
		$('.scroller').children('.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
	else {
		$('.scroller').children('.glyphicon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	}
});

function onScrollButtonClick() {
  scrollingDown = false;
  if ($('.scroller').children('.glyphicon').hasClass('glyphicon-chevron-down')) {
  	scrollingDown = true;
  }

	var lastElement = false;
  if (scrollingDown) {
  	if (isInViewport($('.landing-page-parallax'))) {
	  	scrollToElement($('.landing-page-parallax').next());
	  }
	  else if (isInViewport($('.about-me-parallax'))) {
	  	scrollToElement($('.about-me-parallax').next());
	  	lastElement = true;
	  }

	  if (lastElement) {
  		$('.scroller').children('.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
  	}
  }
  else {
  	scrollToElement($('.landing-page-parallax'))
  	$('.scroller').children('.glyphicon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
  }
}

function isInViewport(el) {
  var elementTop = el.offset().top;
  var elementBottom = elementTop + el.outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

function scrollToElement(el) {
	$('html, body').animate({
		scrollTop: el.offset().top
	}, 500);
}
