$(document).ready(function(){
    var docHeight = $(window).height();
    var docWidth = $(window).width();
   $(".wrapper > div").css("height",docHeight);

   // skrollr function call
    var s = skrollr.init({
        easing: {
            //This easing will sure drive you crazy
            wtf: Math.random,
            inverted: function(p) {
                return 1 - p;
            }
        }
    });
});

