$(document).ready(function() {

    $(".botao").click(function() {
        $(".menu-list").toggle();
    });

});

$(window).resize(function() {
    if ($(document).innerWidth() < 600) {
        $(".menu-list").css("display", "none")
    } else {
        $(".menu-list").css("display", "flex");
    }
});