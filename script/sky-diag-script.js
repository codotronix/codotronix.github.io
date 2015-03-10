$(function () {
	"use strict"
	//this is our array of diagonalStars
	var diagonalStars = [];
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var noOfStar = 1000;
	$('#canvasDiagonalStars')[0].width = winWidth;
	$('#canvasDiagonalStars')[0].height = winHeight;
	var ctx2 = $('#canvasDiagonalStars')[0].getContext('2d');
	ctx2.fillStyle = "#FFF";

	//lets create noOfStar diagonalStars
	for(var i=0; i<noOfStar; i++) {
		diagonalStars[i] = {};
		diagonalStars[i].x = Math.floor(Math.random() * 400) + winWidth/2 - 200;
		diagonalStars[i].y = Math.floor(Math.random() * 400) + winHeight/2 - 200;
		diagonalStars[i].size = Math.random() + .3;
		diagonalStars[i].speed = Math.random() * 2;
		diagonalStars[i].direction = 0; // 1=NW 2=NE 3=SE 4=SW
		
		//set direction for each star
		if (diagonalStars[i].x <= winWidth/2 && diagonalStars[i].y <= winHeight/2) {
			diagonalStars[i].direction = 1;
		}
		else if (diagonalStars[i].x >= winWidth/2 && diagonalStars[i].y <= winHeight/2) {
			diagonalStars[i].direction = 2;
		}
		else if (diagonalStars[i].x >= winWidth/2 && diagonalStars[i].y >= winHeight/2) {
			diagonalStars[i].direction = 3;
		}
		else if (diagonalStars[i].x <= winWidth/2 && diagonalStars[i].y >= winHeight/2) {
			diagonalStars[i].direction = 4;
		}		
	}
	
	function clearCanvas () {
		//Clear the canvas
		ctx2.clearRect(0,0,winWidth,winHeight);
	}

	//Draw all the diagonalStars
	function drawDiagonalStars () {
		for(var i=0; i<noOfStar; i++) {
			ctx2.fillRect(diagonalStars[i].x,diagonalStars[i].y,diagonalStars[i].size,diagonalStars[i].size);
		}
	}

	function giveDirection (index) {
		//set direction for each star
		if (diagonalStars[index].x <= winWidth/2 && diagonalStars[index].y <= winHeight/2) {
			diagonalStars[index].direction = 1;
		}
		else if (diagonalStars[index].x >= winWidth/2 && diagonalStars[index].y <= winHeight/2) {
			diagonalStars[index].direction = 2;
		}
		else if (diagonalStars[index].x >= winWidth/2 && diagonalStars[index].y >= winHeight/2) {
			diagonalStars[index].direction = 3;
		}
		else if (diagonalStars[index].x <= winWidth/2 && diagonalStars[index].y >= winHeight/2) {
			diagonalStars[index].direction = 4;
		}
	}

	function moveDiagonalStars () {		
		for(var i = 0; i < noOfStar; i++) {
			/* Change position for next cycle */
			if (diagonalStars[i].direction == 1) {
				diagonalStars[i].x -= diagonalStars[i].speed;
				diagonalStars[i].y -= diagonalStars[i].speed;
			} else if (diagonalStars[i].direction == 2) {
				diagonalStars[i].x += diagonalStars[i].speed;
				diagonalStars[i].y -= diagonalStars[i].speed;
			} else if (diagonalStars[i].direction == 3) {
				diagonalStars[i].x += diagonalStars[i].speed;
				diagonalStars[i].y += diagonalStars[i].speed;
			} else if (diagonalStars[i].direction == 4) {
				diagonalStars[i].x -= diagonalStars[i].speed;
				diagonalStars[i].y += diagonalStars[i].speed;
			}


			//check out of boundary conditions
			if (diagonalStars[i].x > winWidth || diagonalStars[i].x < 0) {
				diagonalStars[i].x = Math.floor(Math.random() * 400) + winWidth/2 - 200;
				diagonalStars[i].y = Math.floor(Math.random() * 400) + winHeight/2 - 200;
				giveDirection(i);				
			} else if (diagonalStars[i].y > winHeight || diagonalStars[i].y < 0) {
				diagonalStars[i].x = Math.floor(Math.random() * 400) + winWidth/2 - 200;
				diagonalStars[i].y = Math.floor(Math.random() * 400) + winHeight/2 - 200;
				giveDirection(i);
			}
			
		}		
	}

	function letThereBStars () {
		clearCanvas();
		drawDiagonalStars();
		moveDiagonalStars();
		window.setTimeout(letThereBStars, 100);
	}

	letThereBStars();

});