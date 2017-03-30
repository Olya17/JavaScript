/**
 * Created by Оленька on 28.03.2017.
 */
;(function ($) {
    $(function () {
        $('.group').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            prevArrow: '<i class="prev">&lt;</i>',
            nextArrow: '<i class="next">&gt;</i>',
            autoplay: true,
            autoplaySpeed: 400,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
})(jQuery);