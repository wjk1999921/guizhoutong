$(function(){
//	二维码
	$(".icon-weixin").mouseenter(function(){
		$(".ycewm").show();
	})
	$(".icon-weixin").mouseleave(function(){
		$(".ycewm").hide();
	})
//	客服
	$(".icon-dianhua").mouseenter(function(){
		$(".share_pop").show();
	})
	$(".icon-dianhua").mouseleave(function(){
		$(".share_pop").hide();
	})
//	返回顶部
		$(".back_top").click(function(){
		                $('body,html').animate({scrollTop:0},500);
		                return false;
		            });
		})
