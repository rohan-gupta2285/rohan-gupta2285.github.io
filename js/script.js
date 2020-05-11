$(document).ready(function() {

	/*$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});*/

    
    
var typed = new Typed(".typed", {
	strings: ["Management Engineer."],
	typeSpeed: 70,
	loop: false,
	startDelay: 1000,
	showCursor: false,
	onComplete:(self) =>{
		typed = new Typed(".typed2", {
			strings: ["Student."],
			typeSpeed: 70,
			loop: false,
			startDelay: 1000,
			showCursor: false,
			
		})
	},
});
    
    
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    
$("[data-fancybox]").fancybox();
    
    
$(".items").isotope({
filter: '*',
animationOptions:{
    duration: 1500,
    easing:'linear',
    queue: false
}
});
    

$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});
    
$("#navigation li a").click(function(e){
    e.preventDefault();
    
    var targetElement = $(this).attr("href");
    
    var targetPosition = $ (targetElement).offset().top;
    
    $("html, body").animate({scrollTop: targetPosition-50},"slow")
});
    
 
const nav = $("#navigation");
const navTop= nav.offset().top;   

$(window).on("scroll", stickyNavigation);  
function stickyNavigation(){
    
    var body = $("body");
    
    
    if ($(window).scrollTop()>= navTop){
        body.css("padding-top", nav.outerHeight() +"px");
        body.addClass("fixedNav");
    }
    
    else{
          body.css("padding-top",0);
        body.removeClass("fixedNav");
    }
    
}
});