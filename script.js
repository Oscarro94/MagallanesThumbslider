$(document).ready(function(){
	// Declare vars
	let totalWidth = 0;
	let positions = new Array();

    $('#magallanes-slides .slide').each(function(i){
		// Get slider widths
		positions[i] = totalWidth;
		totalWidth += $(this).width();
		
		// Check widths
		if(!$(this).width()){
			alert('Please add a width to your images');
			return false;
		}
	});
    // Set width
	$('#magallanes-slides').width(totalWidth);
	
	// Menu item click handler
	$('#menu ul li a').click(function(e, keepScroll){
		// Remove active class and add inactive
		$('li.result').removeClass('active').addClass('inactive');
		// Add active class to parent
		$(this).parent().addClass('active');
		
		var pos  = $(this).parent().prevAll('.result').length;
		
		$('#magallanes-slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
		
		// Prevent default
		e.preventDefault();
		
		// Stop autoscroll
		if(!autoScroll) clearInterval(itvl);
	});
    // Make first image active
	$('#menu ul li.result:first').addClass('active').siblings().addClass('inactive');
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
});