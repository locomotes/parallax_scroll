$(document).ready(function() {
    $('#fullpage').fullpage({
    	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    	anchors: ['heroPage', 'aboutPage', 'educationPage', 'awardsPage', 'publicationsPage', 'researchPage', 'teachingPage', 'skillsPage'],
    	menu: '#menu',
    	navigation: true
    });
});

$("a").click(function() {
	if ($("li").hasClass("active")) {
		console.log("test");
	}
});

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
