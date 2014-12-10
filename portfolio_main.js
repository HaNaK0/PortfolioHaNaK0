//var mouseOnAbFlag = false

$(document).ready(function() {
	//animation for about button
	$('.navButton#about').mouseenter(function() {
		$(this).css({
		'width': '200',
		"transition-property": "width, color",
		"transition-duration": "2s",
		"transition-delay": "2s, 0",
	
		"-webkit-transition-property": "width, color",
		"-webkit-transition-duration": "2s",
		"-webkit-transition-delay": "2s, 0",
	
		"-moz-transition-property": "width, color",
		-moz-transition-duration: 2s;
		-moz-transition-delay: 0, 2s;
		
		});
	});
	
	$('.navButton#about').mouseleave(function() {
		$(this).css('width', '100');
		$(this).css('color', 'rgba(255,255,255,0)');
	}); 
	
	//animation for game button
	$('.navButton#games').mouseenter(function() {
		$(this).css('width', '200');
	});
	
	$('.navButton#games').mouseleave(function() {
		$(this).css('width', '100');
	}); 
	
	//animation for contact button 
	$('.navButton#contact').mouseenter(function() {
		$(this).css('width', '200');
	});
	
	$('.navButton#contact').mouseleave(function() {
		$(this).css('width', '100');
	}); 
});