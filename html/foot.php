
<div class="foot">
	<p>© 1997-2017 版权所有</p>
	<div class="" id="go_top"><a title="返回顶部" href="#"></a></div>
</div>

<div class="float_serv">
	<ul>
		<li class="serv_1"><a title="xxxx1" href=""></a></li>
		<li class="serv_2"><a title="xxxx2" href=""></a></li>
		<li class="serv_3"><a title="xxxx3" href=""></a></li>
		<li class="serv_4"><a title="电话：135 0000 0000" href=""></a></li>
		<li class="serv_5"><a title="xxxx5" href=""></a></li>
	</ul>
</div>

<?php include("nav.php"); ?>

<script>
/*	右弹购物车滚动条	*/
var t1=TouchScroll('apDiv1',{vOffset:0,mouseWheel:true,keyPress:false,color:'#999'})

$(function(){
	
	/*	右边会员中心入口弹窗	*/
	$(".ITuser").click(function(){
		$(".HYrukou").toggle();
	});

	/*	返回顶部	*/
	$(window).scroll(function(){
		if($(window).scrollTop()>=1){
			$("#go_top").show();
		}else{
			$("#go_top").hide();
		}
	}); 
	$("#go_top a").click(function(){
		$("body,html").animate({scrollTop:0},500);
		return false;
	});

})
</script>