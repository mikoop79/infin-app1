// JavaScript Document
$(document).ready(function(){
	
// Route Map 
var routeMap = $(".nav a");		
		$(".leg0Btn0").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg0Btn0Active");
		$('.topNavTxt img').attr("src", "images/MT0.png");
		})
		
		$(".leg1Btn1").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg1Btn1Active");
		$('.topNavTxt img').attr("src", "images/MT4.png");
		})
		
		$(".leg2Btn2").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg2Btn2Active");
		$('.topNavTxt img').attr("src", "images/MT1.png");		
		})
		
		$(".leg3Btn3").click(function(){
		routeMap.removeClass(" leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg3Btn3Active");	
		$('.topNavTxt img').attr("src", "images/MT3.png");	
		})
  		
		$(".leg4Btn4").click(function(){
		routeMap.removeClass(" leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg4Btn4Active");
		$('.topNavTxt img').attr("src", "images/MT2.png");		
		})


// Route Map 
	
		$(".leg0Btn0").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg0Btn0Active");
		$('.topNavTxt img').attr("src", "images/MT0.png");
		})
		
		$(".leg1Btn1").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg1Btn1Active");
		$('.topNavTxt img').attr("src", "images/MT4.png");
		})
		
		$(".leg2Btn2").click(function(){
		routeMap.removeClass("leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg2Btn2Active");
		$('.topNavTxt img').attr("src", "images/MT1.png");		
		})
		
		$(".leg3Btn3").click(function(){
		routeMap.removeClass(" leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg3Btn3Active");	
		$('.topNavTxt img').attr("src", "images/MT3.png");	
		})
  		
		$(".leg4Btn4").click(function(){
		routeMap.removeClass(" leg0Btn0Active , leg1Btn1Active , leg2Btn2Active , leg3Btn3Active , leg4Btn4Active");
		$(this).addClass("leg4Btn4Active");
		$('.topNavTxt img').attr("src", "images/MT2.png");		
		})
});
