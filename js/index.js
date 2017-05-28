$(function(){
//	第三页的按钮点击事件
	$(".xnet .content p").on('click',function(){
			$(".xnet .main_box").fadeIn(3000);
			$(this).css("display","none");
		})
	
//	第三页图片样式
	$('.htmleaf-container .container').dreamSlider({
                    rowCount:6
                    ,easeEffect: 'bounce'
//                    ,easeEffect: 'standOut'
    });
    
    //轮播图控制时间;
    $(document).ready(function() {
	    $('.carousel').carousel({
	     interval: 100000
	    })
	});
	
	//第五页字体样式;
	$(".look").on('click',function(){
		$(".xav .carousel-caption").animate({"opacity":"1","left":"0%"},2000);
		$(this).css("display","none");
	})
})