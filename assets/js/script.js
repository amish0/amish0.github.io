$(document).ready(function () {
    var w = window.innerWidth;

    if (w > 767) {
        $('#menu-jk').scrollToFixed();
    }



})


$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


});

$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

var publication_status = "hide"

$(function () {
    
    $(".Publication_c").click(function (e) {
        console.log("hello", publication_status);
        if (publication_status == "hide") {
            $('#about_us').hide();
            $('#publication').show();
            $('#services').hide();
            $('#gallery').hide();
            $("#blog").hide();
            publication_status = "Show";
            // $("#home_container").load("publication.html"); 
            // change background-image in homescreen class
            $(".home-screen").css("background-image", "url(assets/images/pbg.jpg)");
        }
    });
});

$(function () {
    // console.log("hello", publication_status);
    $(".About_us_c").click(function (e) {
        console.log("About us", publication_status);
        if (publication_status == "Show") {
            $('#about_us').show();
            $('#publication').hide();
            $('#services').show();
            $('#gallery').show();
            $("#blog").hide();
            publication_status = "hide";
            $(".home-screen").css("background-image", "url(assets/images/Profile.jpg)");
        }
    });
});

$(function () {
    // console.log("services", publication_status);
    $(".Services_c").click(function (e) {
        console.log("services", publication_status);
        if (publication_status == "Show") {
            $('#about_us').show();
            $('#publication').hide();
            $('#services').show();
            $('#gallery').show();
            $("#blog").hide();
            publication_status = "hide";
            $(".home-screen").css("background-image", "url(assets/images/Profile.jpg)");
        }
    });
});

$(function () {
    
    $(".Gallery_c").click(function (e) {
        console.log("Gallery", publication_status);
        if (publication_status == "Show") {
            $('#about_us').show();
            $('#publication').hide();
            $('#services').show();
            $('#gallery').show();
            $("#blog").hide();
            publication_status = "hide";
            $(".home-screen").css("background-image", "url(assets/images/Profile.jpg)");
        }
    });
});

