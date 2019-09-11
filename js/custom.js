$(function() {

    //================== banner Slide js Start ================

    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: true,
        arrows: true,
        prevArrow:"",
        nextArrow:".slide-next",
        dots: false,
        speed: 300,
        autoplaySpeed: 300,
    });

    //================== banner Slide js End ================

    //==================Banner Down Arrow js Start==================

    $('.banner-down').on("click", function () {
        var h = $('#banner').outerHeight();
        $('body,html').animate({
            scrollTop: h
        }, 1000);
    });

    //==================Banner Down Arrow js End==================

});