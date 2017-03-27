/* Sidebar Menu*/
$(document).ready(function() {
//	$('.inactive').click(function(){
	$('.header').click(function(){
		if( $(".logo").hasClass("hidden") ){
			$(".sidebar-open-button").click();
			if( $(this).hasClass("inactives") ){
				return false;
			}
		}
		if($(this).siblings('.menu').css('display')=='none'){
			$(this).parent('li').siblings('li').removeClass('inactives');
			$(this).addClass('inactives');
			$(this).siblings('ul').slideDown(500).children('li');
		}else{
			$(this).removeClass('inactives');
			$(this).siblings('ul').slideUp(500);
			$(this).siblings('ul').children('li').children('a').removeClass('inactives');
		}
	})
});

/* Top Stats Show Hide */
$(document).ready(function(){
	$(".sidepanel").css("display","none");
	$(".IMenuda").css("display","none");
	$(".sidepanel-open-button").click(function(){
		$(".sidepanel").toggle(100); 
	});
});


/* Sidebar Show-Hide On Mobile */
$(document).ready(function(){
    $(".sidebar-open-button-mobile").click(function(){
        $(".sidebar").toggle(150);
    });
});


/* Sidebar Show-Hide */
$(document).ready(function(){

    $('.sidebar-open-button').on('click', function(){
		if($('.sidebar').hasClass('hidden')){
			$(".logo").removeClass("hidden");
			$('.sidebar').removeClass('hidden');
            $('.content').css({
                'marginLeft' : 260
            });
			setMenuColor("show");
        }else{
			$(".logo").addClass("hidden");
			$('.sidebar').addClass('hidden');
			$('.content').css({
                'marginLeft' : 70
            });
			setMenuColor("hide");
        }
		return false;
    });
	
});


/* ===========================================================
PANEL TOOLS
===========================================================*/
/* Minimize */
$(document).ready(function(){
  $(".panel-tools .minimise-tool").click(function(event){
  $(this).parents(".panel").find(".panel-body").slideToggle(100);

  return false;
}); 

 }); 

/* Close */
$(document).ready(function(){
  $(".panel-tools .closed-tool").click(function(event){
  $(this).parents(".panel").fadeToggle(400);

  return false;
}); 

 }); 

 /* Search */
$(document).ready(function(){
  $(".panel-tools .search-tool").click(function(event){
  $(this).parents(".panel").find(".panel-search").toggle(100);

  return false;
}); 

 }); 




/* expand */
$(document).ready(function(){

    $('.panel-tools .expand-tool').on('click', function(){
        if($(this).parents(".panel").hasClass('panel-fullsize'))
        {
            $(this).parents(".panel").removeClass('panel-fullsize');
        }
        else
        {
            $(this).parents(".panel").addClass('panel-fullsize');
 
        }
    });

});


/* ===========================================================
Widget Tools
===========================================================*/


/* Close */
$(document).ready(function(){
  $(".widget-tools .closed-tool").click(function(event){
  $(this).parents(".widget").fadeToggle(400);

  return false;
}); 

 }); 


/* expand */
$(document).ready(function(){

    $('.widget-tools .expand-tool').on('click', function(){
        if($(this).parents(".widget").hasClass('widget-fullsize'))
        {
            $(this).parents(".widget").removeClass('widget-fullsize');
        }
        else
        {
            $(this).parents(".widget").addClass('widget-fullsize');
 
        }
    });

});

/* Kode Alerts */
/* Default */
$(document).ready(function(){
  $(".kode-alert .closed").click(function(event){
  $(this).parents(".kode-alert").fadeToggle(350);

  return false;
}); 

 }); 


/* Click to close */
$(document).ready(function(){
  $(".kode-alert-click").click(function(event){
  $(this).fadeToggle(350);

  return false;
}); 

 }); 



/* Tooltips 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Popover
$(function () {
  $('[data-toggle="popover"]').popover()
})  */


/* Page Loading */
$(window).load(function() {
  $(".loading").fadeOut(750);
})



	


/*	menu	*/
function setMenuColor(str){
		if( str == "hide" ){			// == "hide"
			$(".menu").hide();
			$(".header.inactives").removeClass("inactives");
			$(".menu li.cur").closest(".menu").prev(".header").addClass("inactives");
		}else{
			$(".menu a").each(function(){
				var href1 = $.trim($(this).attr("href"));
				var href2 = window.location.href;
				if( href1 != "" && href1 != "#" &&  ( href2 == href1 || href2.indexOf(href1) >= 0 ) ){
					$(this).parents(".menu").css("display","block").prev(".header").addClass("inactives");
					$(this).parent("li").addClass("cur");
				}
			});
			$(".header .label a").each(function(){
				var href1 = $.trim($(this).attr("href"));
				var href2 = window.location.href;
				if( href1 != "" && href1 != "#" &&  ( href2 == href1 || href2.indexOf(href1) >= 0 ) ){
					$(this).closest(".header").addClass("active");
				}
			});
		}
}

$(function(){

	setMenuColor("show");
	$(".sidebar-open-button").click();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

