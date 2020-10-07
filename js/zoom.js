$(window).scroll(function () {
    $('.zoom-out').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("pinch-out");
        } else {
            $(this).removeClass("pinch-out");
        }
    });
});
