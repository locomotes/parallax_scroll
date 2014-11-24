$(document).ready(function() {
    $('#fullpage').fullpage({
    	sectionsColor: ['#f2f2f2', '#BCBDC1', '#7BAABE', 'whitesmoke', '#000'],
    	anchors: ['heroPage', 'aboutPage', 'educationPage', 'awardsPage', 'publicationsPage', 'researchPage', 'teachingPage', 'skillsPage'],
    	menu: '#menu',
    	navigation: true
    });
});

// $("a").click(function() {
	// if ($("li").hasClass("active")) {
	// 	$("li").css('text-decoration', 'underline');
	// }
// 	if ($('a[href*="#heroPage"]')) {
// 		$('#menu-container').css('background', 'orange');
// 	} else {
// 		$('#menu-container').css('background', 'black');
// 	}
// });

// $(window).scroll(function() {
// 	if ($("li").hasClass("active")) {
// 		$("li").css('text-decoration', 'underline');
// 	}
// });

$(document).ready(function(){
  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});


// Bind the event.
$(window).hashchange( function(){
	if (location.hash === "#heroPage") {
		$('#menu-container').css('background', 'none');
	} else {
		$('#menu-container').css('background', 'black');
		$('.sliding-menu-button').css('background-color','rgba(0, 0, 0, 0.4)');
		$('.sliding-menu-button').css('border','none');
		$('.nav-down').css('background-color','rgba(0, 0, 0, 0.4)')
	}
});
// Trigger the event (useful on page load).
$(window).hashchange();