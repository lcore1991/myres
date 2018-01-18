$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $(".callback-form").fadeIn();
    } else {
        $(".callback-form").fadeOut();
    }
});