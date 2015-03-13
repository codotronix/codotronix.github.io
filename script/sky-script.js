$(function () {
	showStraightMovingStars();
	showDiagonalStars();
	animateSpiralSky();
});

//this function is responsible for everything related to the spiral
function animateSpiralSky () {
	console.log('success');
	
	"use strict"
	//console.log('Hi');
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var cx = winWidth/2 - 9;
	var cy = winHeight/2;
	var r = 0;
	var degree = 0;
	var px = cx;		// + r * Math.cos(degree * Math.PI/180)
	var py = cy; 		// + r * Math.sin(degree * Math.PI/180)
	var randRed = 0;
	var randGreen = 0;
	var randBlue = 0;
	//var colors = ['blue','blueviolet','aqua','red','brown','orange','chocolate','coral','crimson','cyan','darkblue','darkgoldenrod','darkslateblue','deepskyblue','dodgerblue','firebrick','indianred','indigo','maroon','mediumblue','orangered','navy','steelblue','slateblue']
	var colors = ['blue','red'];
	var colorIndex = 0;

	var animateFunc = window.requestAnimationFrame || window.setTimeout;

	$('#canvasSpiral')[0].width = winWidth;
	$('#canvasSpiral')[0].height = winHeight;
	
	var ctx = $('#canvasSpiral')[0].getContext('2d');

	//give a random color to the brush
	
	ctx.fillStyle = "RGB("+randRed+","+randGreen+","+randBlue+")";

	function randBrushColor () {
		//give a random color to the brush
		//colorIndex = Math.floor(Math.random() * colors.length);
		//console.log(colorIndex);
		ctx.fillStyle = colors[colorIndex];
		colorIndex++;
		if (colorIndex > 1) {colorIndex=0;}
	}
	randBrushColor();

	var i = -1;
	var smallR = 28;
	r=smallR;
	function spiralIt () {
		i++;
		ctx.fillRect(px, py, 4, 4);
		if(i%9 == 0) {
			r++;
		}		
		degree++;
		px = cx + 2 * r * Math.cos(degree * Math.PI/180);
		py = cy + r * Math.sin(degree * Math.PI/180);

		//if boundary is touched, reset everything...
		if (px<0 || py<0 || px>winWidth || py>winHeight) {
			//cx += 10;
			r = smallR;
			degree = 0;	
			randBrushColor();			
		}
		window.requestAnimationFrame(spiralIt);
	}

	spiralIt();

	$('#center-disc').click(function () {
		randBrushColor();
	})
}

/**************************** END OF SPIRAL ********************************************************/

//this function is resposible for the diagonally moving stars
function showDiagonalStars() {
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
}
/**************************** END OF DIAGONAL STARS ********************************************************/

//this function is resposible for the straight moving stars
function showStraightMovingStars () {
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
		window.setTimeout(wakeTheSky, 100);
	}

	wakeTheSky();
}

/******************************** END OF showStraightMovingStars ***********************************************/
