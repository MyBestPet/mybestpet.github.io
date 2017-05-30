  
  /*ScrollUp*/
  
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

 /*Select Category*/
 
 $(function() {
	$('.section_goods-cat-1 > .block_goods > .block_goods-buy > .buy').click(function() {
		if($('.section_buy-cats > .cat-1').hasClass('active')) {
			return
		} else {
			$('.section_buy-cats > .cat-1').addClass('active').siblings().removeClass('active');
			$('.section_buy-forms > .form-1').addClass('active').siblings().removeClass('active');
		};
	});
	$('.section_goods-cat-2 > .block_goods > .block_goods-buy > .buy').click(function() {
		if($('.section_buy-cats > .cat-2').hasClass('active')) {
			return
		} else {
			$('.section_buy-cats > .cat-2').addClass('active').siblings().removeClass('active');
			$('.section_buy-forms > .form-2').addClass('active').siblings().removeClass('active');
		};
	});
	$('.section_goods-cat-3 > .block_goods > .block_goods-buy > .buy').click(function() {
		if($('.section_buy-cats > .cat-3').hasClass('active')) {
			return
		} else {
			$('.section_buy-cats > .cat-3').addClass('active').siblings().removeClass('active');
			$('.section_buy-forms > .form-3').addClass('active').siblings().removeClass('active');
		};
	});
	$('.section_buy-cats > div').click(function() {
		if($(this).hasClass('cat-1')) {
			if($(this).hasClass('active')) {
				return
			} else {
				$(this).addClass('active').siblings().removeClass('active');
				$('.section_buy-forms > .form-1').addClass('active').siblings().removeClass('active');
			};
		} else if ($(this).hasClass('cat-2')) {
			if($(this).hasClass('active')) {
				return
			} else {
				$(this).addClass('active').siblings().removeClass('active');
				$('.section_buy-forms > .form-2').addClass('active').siblings().removeClass('active');
			};
		} else if ($(this).hasClass('cat-3')) {
			if($(this).hasClass('active')) {
				return
			} else {
				$(this).addClass('active').siblings().removeClass('active');
				$('.section_buy-forms > .form-3').addClass('active').siblings().removeClass('active');
			};
		}
	}); 
 });