// JavaScript Document
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $("body").addClass("stickyheader");
    } else {
        $("body").removeClass("stickyheader");
    }
});
$( document ).ready(function() {
new WOW().init();

$('.reset').click(function(){
  new WOW().init();
})
	  $(".burger-button").click(function(){
  $(".nav-overlay-mobile").toggleClass("active");
		  $(".burger-button").toggleClass("active");
});
});
