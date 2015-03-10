$(function () {
	"use strict"
	//this is our array of stars
	var stars = [];
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var noOfStar = 2000;
	$('#canvasStraightStars')[0].width = winWidth;
	$('#canvasStraightStars')[0].height = winHeight;
	var ctx = $('#canvasStraightStars')[0].getContext('2d');
	ctx.fillStyle = "#FFF";

	//lets create noOfStar stars
	for(var i=0; i<noOfStar; i++) {
		stars[i] = {};
		stars[i].x = Math.floor(Math.random() * winWidth);
		stars[i].y = Math.floor(Math.random() * winHeight);
		stars[i].size = Math.random() + .3;
		stars[i].speed = Math.random() * 2;
		stars[i].direction = Math.floor(Math.random() * 2) + 1; // 1=X axis, 2=Y axis
		
		if (stars[i].direction == 1) { 			//change in x axis
			if (stars[i].x <= winWidth/2) {
				stars[i].posNeg = 1; 
			} else {
				stars[i].posNeg = 2;
			}
		} else { 								//change in y-axis
			if (stars[i].y <= winHeight/2) {
				stars[i].posNeg = 1; 
			} else {
				stars[i].posNeg = 2;
			}
		}
	}
	
	function clearCanvas () {
		//Clear the canvas
		ctx.clearRect(0,0,winWidth,winHeight);
	}

	//Draw all the Stars
	function drawStars () {
		for(var i=0; i<noOfStar; i++) {
			ctx.fillRect(stars[i].x,stars[i].y,stars[i].size,stars[i].size);
		}
	}

	function moveStars () {		
		for(var i = 0; i < noOfStar; i++) {
			/* Change position for next cycle */
			if (stars[i].direction == 1 && stars[i].posNeg == 1) {
				stars[i].x -= stars[i].speed;
			} else if (stars[i].direction == 1 && stars[i].posNeg == 2) {
				stars[i].x += stars[i].speed;
			} else if (stars[i].direction == 2 && stars[i].posNeg == 1) {
				stars[i].y -= stars[i].speed;
			} else if (stars[i].direction == 2 && stars[i].posNeg == 2) {
				stars[i].y += stars[i].speed;
			}


			//check out of boundary conditions
			if (stars[i].x > winWidth || stars[i].x < 0) {
				stars[i].x = Math.floor(Math.random() * winWidth);
				stars[i].y = Math.floor(Math.random() * winHeight);				
			}

			if (stars[i].y > winHeight || stars[i].y < 0) {
				stars[i].x = Math.floor(Math.random() * winWidth);
				stars[i].y = Math.floor(Math.random() * winHeight);
			}
			/* Change direction complete */				
			if (stars[i].direction == 1) { 			//change in x axis
				if (stars[i].x <= winWidth/2) {
					stars[i].posNeg = 1; 
				} else {
					stars[i].posNeg = 2;
				}
			} else { 								//change in y-axis
				if (stars[i].y <= winHeight/2) {
					stars[i].posNeg = 1; 
				} else {
					stars[i].posNeg = 2;
				}
			}
		}		
	}

	function wakeTheSky () {
		clearCanvas();
		drawStars();
		moveStars();
		window.setTimeout(wakeTheSky, 17);
	}

	wakeTheSky();

});