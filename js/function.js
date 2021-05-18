$(function(){	
	// ぬるぬるスクロール
	$('a[href^="#"]').click(function() {
		let speed = 400;
		let href= $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	//スクロールアクション
	var startPos = 0,winScrollTop = 0;
	var winScrollTop = $(window).scrollTop();
	var winHeight = $(window).height();
	var keyHeight = $('.keyVisual').height();
	var windowWidth = window.innerWidth;
	$('.scrollActionSp').each(function(){
		var target = $(this).offset().top;			
		if (windowWidth <= 1025){ $(this).addClass('scrollAction'); }
		if (winScrollTop > target - winHeight){ $(this).addClass('scrollAction'); 	}
	});
	$('.topAboutMap').each(function(){
		var target = $(this).offset().top;
		if (windowWidth <= 1025){ $(this).addClass('topAboutMapActive'); }
	});
	$(window).on('scroll',function(){
		// 上スクロールでヘッダーを隠す
	    winScrollTop = $(this).scrollTop();
		if(winScrollTop == 0) {
		} else if (winScrollTop >= startPos) {
	        $('.side').addClass('hideSide');
	    } else {
	        $('.side').removeClass('hideSide');
	    }
    	startPos = winScrollTop;		
		$('.fadeinBottom').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('scrollAction');
			}
		});
		$('.fadeinScale').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('scrollAction');
			}
		});
		$('.topAboutMap').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('topAboutMapActive');
			}
		});
		$('.decoSymbolPink01').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('decoSymbolPink01Active');
			}
		});
		$('.decoSymbolPink02').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('decoSymbolPink02Active');
			}
		});
		$('.decoSymbolPink03').each(function(){
			var target = $(this).offset().top;
			if (winScrollTop > target - winHeight){
				$(this).addClass('decoSymbolPink03Active');
			}
		});
	});
});
