var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        if (!$("body").hasClass("down")) {
            $("body").addClass("down");
        }
    } else {
        $("body").removeClass("down");
    }

    lastScrollTop = st;

    if ($(this).scrollTop() <= 0) {
        $("body").removeClass("down");
    }
});
