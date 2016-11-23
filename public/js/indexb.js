$(".firstRD").click(function() {
	ga('send', 'event', 'rdAsk', 'click');
});

$(".secondRD").click(function() {
	ga('send', 'event', 'rdAnswer', 'click');
});

$(".thirdRD").click(function() {
	ga('send', 'event', 'rdResume', 'click');
});

$(".fourthRD").click(function() {
	ga('send', 'event', 'rdPrev', 'click');
});