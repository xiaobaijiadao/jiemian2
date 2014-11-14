$(document).ready(function(){
    ppt();
	function ppt(){
    	$("#ppt,#background").css({"height":window.innerHeight+"px"});
	}
	$(".headlist").click(function headlistclick(){
		$(".act").removeClass("act");
		$(this).addClass("act");
	});
});	// JavaScript Document