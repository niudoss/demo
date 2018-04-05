$(function(){
	$(".nav1").click(function(){
		$(".nav-ab").css("display","block")
		$(".nav-aa").css("display","none")
		return false
	})
	$(".nav2").click(function(){
		$(".nav-ab").css("display","none")
		$(".nav-aa").css("display","block")
		return false
	})
	$("body").click(function(){
		$(".nav-ab").css("display","none")
		$(".nav-aa").css("display","none")
	})
	
	$(".lef").click(function(){
		$(".beni .banner").css("left","-100%")
	})
	$(".rig").click(function(){
		$(".beni .banner").css("left","0")
	})
	  var tmer= setInterval(show,4000)
	   var x=1
	function show(){
		$(".lun_b .item").css("z-index",x)
		
		 if(x==1){
			$(".itte").animate({
				"left":40
			},1000)
			$(".itt").animate({
				"left":0
			},1000)
			$(".disd .rige").css("background","#000000")
			$(".disd .lefa").css("background","")
		}else if(x==-1){
			$(".itte").animate({
				"left":0
			},1000)
			$(".itt").animate({
				"left":40
			},1000)
			$(".disd .rige").css("background","")
			$(".disd .lefa").css("background","#000000")
		}
		x=x*-1		
	}
         
         setInterval(move,4000)
       var y=1;
    function move(){
    $(".tete .tte").css("z-index",y)
     if(y==1){
			$(".tete .tte").animate({
				"left":90
			},1000)
			$(".ttr").animate({
				"left":120
			},1000)
      }else if(y==-1){
      	
      	$(".tete .tte").animate({
				"left":120
			},1000)
			$(".ttr").animate({
				"left":90
			},1000)
      }
       y=y*-1	
    }










})