var sections = ["description","key-skills","education","employment-history"]
var pointer = 0;

$(document).ready(function(){
	$('.nav').css('display','none');
	$('.buttons').css('display','none');
	$('.description').css('display','none');
	$('.key-skills').css("display","none");
	$('.education').css("display","none");
	$('.employment-history').css("display","none");

	$('.nav').fadeIn('slow');
	$('.buttons').delay(1200).fadeIn('slow');
	$('.description').delay(1800).fadeIn('slow')

	$('.glyphicon-menu-left').click(function(){
		$('.'+sections[pointer]).css("display","none");
		if(pointer == 0){
			pointer = 4;
		}
		pointer--;
		$('.' + sections[pointer]).fadeIn();	
	})

	$('.glyphicon-menu-right').click(function(){
		$('.'+sections[pointer]).css("display","none");
		if(pointer == 3)
			pointer = -1;
		pointer++;
		$('.' + sections[pointer]).fadeIn();	
	})

	$('#desc').click(function(){
		$('.'+sections[pointer]).css("display","none");
		pointer = 0;
		$('.' + sections[pointer]).fadeIn();
	})

	$('#key').click(function(){
		$('.'+sections[pointer]).css("display","none");
		pointer = 1;
		$('.' + sections[pointer]).fadeIn();
	})

	$('#edu').click(function(){
		$('.'+sections[pointer]).css("display","none");
		pointer = 2;
		$('.' + sections[pointer]).fadeIn();
	})

	$('#employ').click(function(){
		$('.'+sections[pointer]).css("display","none");
		pointer = 3;
		$('.' + sections[pointer]).fadeIn();
	})
})

