$(document).ready(function() {
    $('a').mouseenter(function() {
        $('a').fadeTo('fast', 1);
    });
    $('a').mouseleave(function() {
        $('a').fadeTo('fast', 0.3)
    });
});