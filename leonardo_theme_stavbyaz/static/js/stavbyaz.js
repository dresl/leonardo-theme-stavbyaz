/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('a[href="/#main_content"]').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href').replace("/", "")).offset().top - 1)
    }, 1200, 'easeInOutExpo');
    event.preventDefault();
});

(function($) {
    "use strict"; // Start of use strict

    // **************************************
    // jQuery to collapse the navbar on scroll
    // **************************************

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 90) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".arrow-down").addClass("arrow-responsible");
            $(".arrow-down2").addClass("arrow-responsible");
            $(".green-area").addClass("area-color-responsible");
            $(".white-area").addClass("area-color-responsible");
            $(".telephone-num").css("font-size", "19px")
            $(".telephone-num").css("margin-right", "27px")
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $(".arrow-down").removeClass("arrow-responsible");
            $(".arrow-down2").removeClass("arrow-responsible");
            $(".green-area").removeClass("area-color-responsible");
            $(".white-area").removeClass("area-color-responsible");
            $(".telephone-num").css("font-size", "25px")
            $(".telephone-num").css("margin-right", "0px")
        }
    });

})(jQuery); // End of use strict
