$(document).ready(init);

function init() {
    /* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

    $.fn.scrollPath("getPath")
        // Move to 'start' element
        .moveTo(400, 50, {name: "start"})
        // Line to 'description' element
        .lineTo(400, 800, {name: "description"})
        // Arc down and line to 'syntax'
        .arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
        .lineTo(600, 1600, {
            callback: function() {
                highlight($(".settings"));
            },
            name: "syntax"
        })
        // Continue line to 'scrollbar'
        .lineTo(1750, 1600, {
            callback: function() {
                highlight($(".sp-scroll-handle"));
            },
            name: "scrollbar"
        })
        // Arc up while rotating
        .arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
        // Line to 'rotations'
        .lineTo(2400, 750, {
            name: "rotations"
        })
        // Rotate in place
        .rotate(3*Math.PI/2, {
            name: "rotations-rotated"
        })
        // Continue upwards to 'source'
        .lineTo(2400, -700, {
            name: "source"
        })
        // Small arc downwards
        .arc(2250, -700, 150, 0, -Math.PI/2, true)

        //Line to 'follow'
        .lineTo(1350, -850, {
            name: "follow"
        })
        // Arc and rotate back to the beginning.
        .arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

    // We're done with the path, let's initate the plugin on our wrapper element
    $(".wrapper").scrollPath({drawPath: true, wrapAround: true});

    // Add scrollTo on click on the navigation anchors
    $("nav").find("a").each(function() {
        var target = $(this).attr("href").replace("#", "");
        $(this).click(function(e) {
            e.preventDefault();

            // Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
            // for extra easing functions like the one below
            $.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
        });
    });
}