/**
 * Created by Оленька on 10.04.2017.
 */
;(function ($) {
    $(function () {
        /* isotop */
        var $grid = $('.work-hard').isotope({
                itemSelector: '.work'
            });

            var menu = $('.menu').on('click', 'a', function(){
                menu.attr('data-filter');
                $('.menu a').removeClass('active');
                $(this).addClass('active');
               var selector = $(this).attr('data-filter');
                $grid.isotope({
                    filter: selector
                });
        });

            /* scrolling */
        $("#nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $(".hover").on("click","a", function (event) {
            event.preventDefault();
            var click  = $(this).attr('href'),
                top = $(click).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        $(".already-button").on("click","a", function (event) {
            event.preventDefault();
            var point  = $(this).attr('href'),
                top = $(point).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
        /* map */
        var map,
        space = {lat: 49.567, lng: 34.581},
        point = {lat: 49.566, lng:34.587};
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: space,
                zoom: 15
            });
            var image = {
                url: 'bouncy/icon.png',
                size: new google.maps.Size(150, 150)
            };
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: image
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
                iv1Content.style.opacity = 1;
            });
        }
        initMap();

         /*slider */
        $('.slider').slick({

          /*  rtl: true,*/
            /*autoplay: true,
            autoplaySpeed: 400,*/
            dots: true
        });/**/
        $('.slider-image').slick({

            /*  rtl: true,*/
            /*autoplay: true,
             autoplaySpeed: 400,*/
            dots: true
        });/**/
    });
})(jQuery);