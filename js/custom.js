var fullpageAPI = null;

$(document).ready(function() {

	initFullPage();

	// Call this method to populate the content for tech (default) blog page on page load
  	populateSlides('tech');
  	changeBackgroundImage('tech');

  	// Called when cycling through categories on the blogs page
  	$('.blog-category-select').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
  		var categoryName = getCategoryName(clickedIndex);

  		populateSlides(categoryName);
  		changeBackgroundImage(categoryName);
	});
});

function initFullPage() {

	fullpageAPI = new fullpage('#fullpage', {
	    // licenseKey: 'abcd1234-abcd1234-abcd1234-abcd1234'
		licenseKey: '8znZmcG#a5',
	    responsiveWidth: 350,
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

	console.clear();
}

function getCategoryName(clickedIndex) {
	return constants['indexToCategoryMap'][clickedIndex];
}

function populateSlides(categoryName) {
	var blogData = constants['allBlogCategoryData'][categoryName];
	var totalPostsCount = constants['allBlogCategoryData'][categoryName].length;
	var currSlide = 1;
	var slidesRequired = Math.floor(totalPostsCount/constants['blogPostsPerSlide']) + 1;
	var slidesData = '<div class="slide" data-anchor="blog_' + categoryName + '_' + currSlide + '">';
	
	for (i = 1; i <= totalPostsCount; i++) {
		// slidesData += '<div class="blog-post" onclick="window.open("' + blogData[i-1]['deeplink'] + '","mywindow");">';
		slidesData += '<div class="blog-post ' + categoryName + '" onclick="window.open(\'' + blogData[i-1]['deeplink'] + '\',\'mywindow\');">';
		slidesData += '<span class="blog-post-img-container"><img class="blog-post-img" src="' + blogData[i-1]['thumbnailUrl'] + '"></img></span>';
		slidesData += '<span class="blog-post-desc-container">';
		slidesData += '<div class="blog-post-title">' + blogData[i-1]['title'] + '</div>';
		slidesData += '<div class="blog-post-subtext">' + blogData[i-1]['publishedOn'] + '</div>';
		slidesData += '</span>';
		slidesData += '</div>';

		// Time to add a new slide
		if (i % constants['blogPostsPerSlide'] == 0) {
			slidesData += '</div>';
			++currSlide;

			// Only add a new slide if there is more content left to populate after the current post
			if (i != totalPostsCount) {
				slidesData += '<div class="slide" data-anchor="blog_' + categoryName + '_' + currSlide + '">';
			}
		}
	}

	if (totalPostsCount % constants['blogPostsPerSlide'] != 0) {
		slidesData += '</div>';
	}

	document.getElementById("blog").innerHTML = slidesData;

	// remembering the active section / slide
    var activeSectionIndex = $('.fp-section.active').index();
    var activeSlideIndex = $('.fp-section.active').find('.slide.active').index();

	fullpageAPI.destroy('all');

    // setting the active section as before
    $('.section').eq(activeSectionIndex).addClass('active');

    // were we in a slide? Adding the active state again
    if (activeSlideIndex > -1) {
        $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
    }

	initFullPage();

	// blog reside at index 3, so we must only show the category dropdown on page 3.
	if (activeSectionIndex != 3) {
		$('#blog-category-wrapper').addClass('hide');
	}
}

function changeBackgroundImage(categoryName) {
	var imgNameSuffix = '_bg.jpg';
	var isMobileScreen = document.getElementById("blog").offsetWidth < 600;
	if (isMobileScreen) {
		imgNameSuffix = '_mobile_bg.jpg';
	}
	var imgName = 'blog_' + categoryName + imgNameSuffix;
	document.getElementById("blog").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.1)), url('resources/img/" + imgName + "')";
}