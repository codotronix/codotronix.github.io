$(function () {
	function manageCircularDisc () {
		var winHeight = $(window).height();
		var winWidth = $(window).width();

		$('#disc').css({
			'left': (winWidth - $('#disc').width())/2 ,
			'top': (winHeight - $('#disc').height())/2
		});

		$('#center-disc').css({
			'left': ($('#disc').width() - $('#center-disc').width())/2 ,
			'top': ($('#disc').height() - $('#center-disc').height())/2 - 45
		});

		var cx = winWidth/2;
		var cy = winHeight/2;
	 	var r = $('#disc').width() / 2;

		var smallDiscId = '#small-disc-';
		var degree = 0;
		var discX = 0;
		var discY = 0;
		//position all 6 small discs
		for(var i=1; i<=6; i++) {
			degree = i*60;
			discX = cx + r * Math.cos(degree * Math.PI/180) - (winWidth - $('#disc').width())/2 - 60;
			discY = cy + r * Math.sin(degree * Math.PI/180) - (winHeight - $('#disc').height())/2 - 60;
			$(smallDiscId+i).css({
				'top': discY,
				'left': discX 
			});
		}
	}

	manageCircularDisc();
	//toggle the image once to stop delayed loading of backgroung image of center disc
	$('#center-disc').toggleClass('center-disc-bg2');
	
	//hide the loading text and show the container
	$('#loadingText').hide();
	$('#container').show();

	$(window).resize(function () {
		manageCircularDisc();
	});

	$('#center-disc').click(function () {
		$(this).toggleClass('center-disc-bg2');
	});
});
