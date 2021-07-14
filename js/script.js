// JavaScript Document
$( document ).ready(function() {
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $("body").addClass("stickyheader");
    } else {
        $("body").removeClass("stickyheader");
    }
});