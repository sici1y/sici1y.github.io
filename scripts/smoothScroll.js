$("#scroll-1").on("click", function() {
    $('html,body').animate({
        scrollTop: $("#scrollShortcutOne").offset().top
     });
});
$("#scroll-2").on("click", function() {
    $('html,body').animate({
        scrollTop: $("#scrollShortcutTwo").offset().top
     });
});
$("#scroll-3").on("click", function() {
    $('html,body').animate({
        scrollTop: $("#scrollToTop").offset().top
     });
});