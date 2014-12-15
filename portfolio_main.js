//var mouseOnAbFlag = false

$(document).ready(function() {
	//animation for all buttons
	var $currentPane = $('.contentPane#about')
	
	$('.navButton').mouseenter(function() {
		$(this).css('transition-delay', '0, .5s');
		$(this).css('-moz-transition-delay', '0, .5s');
		$(this).css('-webkit-transition-delay', '0, .5s');
		
		$(this).css('width', '300');
		$(this).css('color', 'rgba(255,255,255,1)');
	});
	
	$('.navButton').mouseleave(function() {
		$(this).css('transition-delay', '.5s, 0');
		$(this).css('-moz-transition-delay', '.5s, 0');
		$(this).css('-webkit-transition-delay', '.5s, 0');
		
		$(this).css('color', 'rgba(255,255,255,0)');
		$(this).css('width', '100');
	});
	
	
	//if about button is clicked
	$('.navButton#about').click(function() {
		$currentPane.css('z-index', '1')
		$currentPane.css('left', '-100%')
		
		$currentPane = $('.contentPane#about')
		
		$currentPane.css('z-index', '2')
		$currentPane.css('left', '0%')
	});
	
	//if game button is clicked
	$('.navButton#games').click(function() {
		$currentPane.css('z-index', '1')
		$currentPane.css('left', '-100%')
		
		$currentPane = $('.contentPane#games')
		
		$currentPane.css('z-index', '2')
		$currentPane.css('left', '0%')
	});
	
	//if contact button is clicked
	$('.navButton#contact').click(function() {
		$currentPane.css('z-index', '1')
		$currentPane.css('left', '-100%')
		
		$currentPane = $('.contentPane#contact')
		
		$currentPane.css('z-index', '2')
		$currentPane.css('left', '0%')
	});
});