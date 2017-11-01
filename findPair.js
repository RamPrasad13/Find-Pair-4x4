$(document).bind("contextmenu",function(e) {
	e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
$(document).ready(function() {
	$(".cntr").hide(0).delay(500).fadeIn(3000);
	var score = 0;
	var click = 1;
	var color1,color2;
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
	var uniqueColors = ['red','yellow','blue','green'];
	var rowSize = 4, colSize = 4;
	var colors = [];
	var j = 0;
	for (i=0; i< (rowSize * colSize); i++) {
		if(j == uniqueColors.length) {
			j = 0;
		} 
		colors.push(uniqueColors[j]);
		j++;
	}	
	console.log("colors : " +colors);
	colors = shuffleArray(colors);
	console.log("colors : " +colors);
	var i =0;
	$('.box').each(function(){
		$(this).attr('data-color', colors[i++]);
	});
	var prev = '';
	var that = '';
	var tries = 0;
	$('.color-swatch').click(function(){
		var color = $(this).data('color');
		if($(this).hasClass('select1')) {
		var chkFinish = 1;	
		} else {
	    	if(click ==  1) {
	    		//$(this).hide(0).delay(100).fadeIn(300);
	    		$(this).css("background-color",color);
	    		prev = $(this);
	    		color1 = color;
	    		click = 2;
	    		$(this).addClass('select1');
	    	} else {
	    		$('.box').removeClass('color-swatch');
	    		prev.removeClass('select1');
	    		that = $(this);
	    		//$(this).hide(0).delay(100).fadeIn(300);
	    		$(this).css("background-color",color);
				color2 = color;
	    		if(color1 == color2) {
	    			setTimeout(function(){
	    				prev.addClass('hide-box');
	    				that.addClass('hide-box');
	    				$('.box').addClass('color-swatch');
	    				chkFinish = 1;
	    				$('.box').each(function(){
							if ($(this).hasClass("hide-box")) {

							} else {
								chkFinish = 0;
							}
						});
						if(chkFinish == 1) {
							alert("Congratulations!");
						}
	    			}, 400);
	    			score += 20;
	    			tries = 1;
	    		} else {
	    			setTimeout(function(){
						that.css("background-color",'white');
	    				prev.css("background-color",'white');
	    				$('.box').addClass('color-swatch');
					}, 400);
					if(tries == 0) {
						tries++;
					}else if(tries == 1) {
						score -= 5;
						tries++;
					}else if(tries == 2) {
						score -= 10;
						tries++;
					} else {
						score -= 20;
					}
	    		}
	    		click = 1;
	    	}
    	}
    	$('.score').html(score);
    	console.log("Score: "+score);	
	});
});