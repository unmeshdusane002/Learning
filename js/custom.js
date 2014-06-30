$(document).ready(function(){
    var docHeight = $(window).height()+50;
    var docWidth = $(window).width();
   $(".wrapper > div").css("height",docHeight);

    var s = skrollr.init();
});