$(window).scroll(function () {
    $('.slide-in-left').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("slideLeft");
        } else {
            $(this).removeClass("slideLeft");
        }
    });
});
