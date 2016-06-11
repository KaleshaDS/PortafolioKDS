$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
        onLeave: function (index, nextIndex, direction) {
             //reaching our last section? The one with our normal site?
            if (nextIndex == 4) {
                $('#pp-nav').fadeOut();
            }
 
            //leaving our last section? The one with our normal site?
            if (index == 4) {
                $('#pp-nav').fadeIn();
            }
        },
    });
});
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        verticalCentered: false,
        css3: false,
    });
});

