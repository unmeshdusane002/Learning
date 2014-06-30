$(document).ready(function(){
    var docHeight = $(window).height()+200;
    var docWidth = $(window).width();
   $(".wrapper > div").css("height",docHeight);

    var s = skrollr.init();
});