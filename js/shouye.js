$(function(){
//首页
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
			console.log("111");
		                $('body,html').animate({scrollTop:0},500);
		                return false;
		            })
	

//	产品中心返回顶部
		$(".return_top").click(function(){
//			console.log("111");
            $('body,html').animate({scrollTop:0},500);
            return false;
		})
		//tab切换
	//鼠标放到li上
    	$(".qiehuan>li").click(function(){
    		console.log("1111");
    		//li
    		$(this).addClass("yanse").siblings("li").removeClass("yanse");
//    		内容
    		$(".tab_content1>div").eq($(this).index()).addClass("show1").siblings("div").removeClass("show1");
    	})
    	
    	
//关于我们
//	视频播放
	$(".bofangqi_left").click(function(){
		$(this).hide().next().show();
	})
//	左边
	$(".ab_video_left").mouseenter(function(){
		$(this).find("a").css({"opacity":"0.2","background":"#000"});
	})
	$(".ab_video_left").mouseleave(function(){
		$(this).find("a").css({"opacity":"0.5","background":"#000"});
	})
//	右边
	$(".ab_video_right").mouseenter(function(){
		$(this).find("a").css({"opacity":"0.2","background":"#000"});
	})
	$(".ab_video_right").mouseleave(function(){
		$(this).find("a").css({"opacity":"0.5","background":"#000"});
	})
//	视频
	$(".bofangqi_right").click(function(){
		$(".small_video").show();
	})
	$(".small_video").click(function(){
		$(".small_video").hide();
	})
// 闪现的效果
//	$(".jiantou>div").click(function(){
//  		console.log("1111");
//  		$(".sxlunbo_con>div").eq($(".sxlunbo_con>div").index()).addClass("carousel").siblings("div").removeClass("carousel");
////  	console.log($(".sxlunbo_con>div").index());
////  	$(".sxlunbo_con>div").eq(0).addClass("carousel").siblings("div").removeClass("carousel");
//	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".left_arrow").click(function(){
    		console.log("1111");
//$("li").before(newLi);
    	$(".qiehuan1").eq(0).before($(".qiehuan1:eq(1)"));
//	$(".seclected2").
	})
	$(".right_arrow").click(function(){
		console.log($(".qiehuan1:eq(1)"));
		$(".qiehuan1").eq(0).before($(".qiehuan1:eq(1)"));
//  	$(".sxlunbo_con>div").eq(1).addClass("carousel").siblings("div").removeClass("carousel");
	})



})

