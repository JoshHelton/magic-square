function validNumber(p_number){
	if(p_number <= 20 || p_number > 99){
		return false;}
	else{
		return true;
	}
}


function RefreshSquare(p_number){
	var timer = 0;
	var timerDelay = document.getElementById('myRange').value
	
	$('.magic-square .square').text("_");
	$('.magic-square .row-total').text("");
	$('.logic').html("");
	
	if(p_number > 33){
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-6 text-right'>Starting Number</td><td class='col-md-6 text-left'>"+p_number+"</td></tr>");}, timer);
		timer = timer + timerDelay*1;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-4 col-xs-4 text-right'>Subtract (34)</td><td class='col-md-4 col-xs-6 text-right'>("+p_number+"-34)=</td><td class='col-md-4 col-xs-2 text-left'>"+(p_number-34)+"</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-4 col-xs-4 text-right'>Divide by 4</td><td class='col-md-4 col-xs-6 text-right'>("+(p_number-34)+"/4)=</td><td class='col-md-4 col-xs-2 text-left'>"+(Math.floor((p_number-34)/4))+"&nbsp;&nbsp;R. "+((p_number-34)%4)+"</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12'>&nbsp;</td></tr>");}, timer);
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-8 text-left'>Add 1 to the number and we'll use the remainder later on.</td><td class='col-md-4 text-left'>"+((Math.floor((p_number-34)/4))+1)+"</td></tr>");}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Start at the top right of the square and put the "+ ((Math.floor((p_number-34)/4))+1) +" there.</td></tr>");}, timer);
		timer = timer + timerDelay*3;			

		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(4)").text(Math.floor((p_number-34)/4) +1);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Follow the pattern until 4 empty squares left...</td></tr>");}, timer);
		timer = timer + timerDelay*1.5;			
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(4)").text(Math.floor((p_number-34)/4) +1);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(2)").text(Math.floor((p_number-34)/4) +2);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(1)").text(Math.floor((p_number-34)/4) +3);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(3)").text(Math.floor((p_number-34)/4) +4);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(2)").text(Math.floor((p_number-34)/4) +5);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(4)").text(Math.floor((p_number-34)/4) +6);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(3)").text(Math.floor((p_number-34)/4) +7);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(1)").text(Math.floor((p_number-34)/4) +8);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(3)").text(Math.floor((p_number-34)/4) +9);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(1)").text(Math.floor((p_number-34)/4) +10);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(2)").text(Math.floor((p_number-34)/4) +11);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(4)").text(Math.floor((p_number-34)/4) +12);}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>&nbsp;</td></tr>");}, timer);
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>STOP...</td></tr>");}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-4 text-left'>Add remainder to last number</td><td class='col-md-4 text-right'>("+(Math.floor((p_number-34)/4) +12)+"+"+((p_number-34)%4)+")=</td><td class='col-md-4 text-left'>"+((Math.floor((p_number-34)/4) +12)+((p_number-34)%4))+"</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-8 text-left'>Add 1 to the number, follow the pattern...</td><td class='col-md-4 text-left'>"+((Math.floor((p_number-34)/4) +12)+1+((p_number-34)%4))+"</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(1)").text(Math.floor((p_number-34)/4) + 13 + (p_number-34)%4);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(3)").text(Math.floor((p_number-34)/4) + 14 + (p_number-34)%4);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(4)").text(Math.floor((p_number-34)/4) + 15 + (p_number-34)%4);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(2)").text(Math.floor((p_number-34)/4) + 16 + (p_number-34)%4);}, timer);
		
	}else{
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-6 text-right'>Starting Number</td><td class='col-md-6 text-left'>"+p_number+"</td></tr>");}, timer);
		timer = timer + timerDelay*1;	
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Start at the top right of the square and put a 1 there.</td></tr>");}, timer);
		timer = timer + timerDelay*3;			
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(4)").text(1);}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Follow the pattern until 4 empty squares left...</td></tr>");}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(2)").text(2);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(1)").text(3);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(3)").text(4);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(2)").text(5);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(4)").text(6);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(3)").text(7);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(1)").text(8);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(3)").text(9);}, timer);
		timer = timer + timerDelay*1.5;
		
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(1)").text(10);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(2)").text(11);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(4)").text(12);}, timer);

		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>&nbsp;</td></tr>");}, timer);
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>STOP...</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-4 text-right'>Subtract (21)</td><td class='col-md-4 text-right'>("+p_number+"-21)=</td><td class='col-md-4 text-left'>"+(p_number-21)+"</td></tr>");}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Start at the second row first square and put the "+ (p_number-21) +" there.</td></tr>");}, timer);
		timer = timer + timerDelay*3;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(2) .square:nth-child(1)").text(p_number-21);}, timer);
		timer = timer + timerDelay*2;
		window.setTimeout(function () { $(".logic").append("<tr class='row'><td class='col-md-12 text-left'>Follow the pattern clockwise...</td></tr>");}, timer);
		
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(1) .square:nth-child(3)").text(p_number-20);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(4) .square:nth-child(4)").text(p_number-19);}, timer);
		timer = timer + timerDelay*1.5;
		window.setTimeout(function () { $( ".magic-square .row:nth-child(3) .square:nth-child(2)").text(p_number-18);}, timer);
	}
}

$( ".target-number" ).change(function() {
  var number = $('.target-number').val();
  if(validNumber(number)){
	RefreshSquare(number)
  }else {
	alert('Invalid Number (21-99): ' + number);
  }
});


$('body').on('click', '.validate', function (event) {
    var magicSquare = $(".magic-square");
	var total = 0;
	var sum = 0;
	
    $(".row", magicSquare).each(function () {
		sum = 0;
		var that = this;
		$('div[class^="square"]', that).each(function(k, v){
			sum += parseInt($(this).text());
			if(k === $('div[class^="square"]', that).length -1) $('.row-total', that).text(sum);
		});
    });
	
	sum = 0;	
	$('div[class^="square"]:nth-child(1)', $(".magic-square")).each(function(k, v){
		sum += parseInt($(this).text());
		if(k === $('div[class^="square"]:nth-child(1)', $(".magic-square")).length -1) $('.row-total:nth-child(1)', $(".magic-square")).text(sum);
	});

	sum = 0;		
	$('div[class^="square"]:nth-child(2)', $(".magic-square")).each(function(k, v){
		sum += parseInt($(this).text());
		if(k === $('div[class^="square"]:nth-child(2)', $(".magic-square")).length -1) $('.row-total:nth-child(2)', $(".magic-square")).text(sum);
	});

	sum = 0;		
	$('div[class^="square"]:nth-child(3)', $(".magic-square")).each(function(k, v){
		sum += parseInt($(this).text());
		if(k === $('div[class^="square"]:nth-child(3)', $(".magic-square")).length -1) $('.row-total:nth-child(3)', $(".magic-square")).text(sum);
	});	
	
	sum = 0;	
	$('div[class^="square"]:nth-child(4)', $(".magic-square")).each(function(k, v){
		sum += parseInt($(this).text());
		if(k === $('div[class^="square"]:nth-child(4)', $(".magic-square")).length -1) $('.row-total:nth-child(4)', $(".magic-square")).text(sum);
	});	
	
});