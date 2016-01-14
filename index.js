var sections = ["description","key-skills","education","employment-history"]
var pointer = 0;

$(document).ready(function(){
	$('.key-skills').css("display","none");
	$('.education').css("display","none");
	$('.employment-history').css("display","none");

	$('.glyphicon-menu-left').click(function(){
		console.log(sections[pointer] + " " + pointer)
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
})

