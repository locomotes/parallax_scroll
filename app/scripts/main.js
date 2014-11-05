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

