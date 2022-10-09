document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
        $('.rev1').click(function () {
            $(this).closest(
                    '.elementor-section')
                .next().slideToggle();
            $(this).toggleClass('opened');
            // $(".header").fadeOut(1500);
        });
        $('.closebutton').click(function () {
            $(this).closest(
                    '.elementor-section')
                .prev().find('.rev1')
                .click();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
        $('.rev2').click(function () {
            $(this).closest(
                    '.elementor-section')
                .next().slideToggle();
            $(this).toggleClass('opened');
        });
        $('.closebutton').click(function () {
            $(this).closest(
                    '.elementor-section')
                .prev().find('.rev2')
                .click();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
        $('.rev3').click(function () {
            $(this).closest(
                    '.elementor-section')
                .next().slideToggle();
            $(this).toggleClass('opened');
        });
        $('.closebutton').click(function () {
            $(this).closest(
                    '.elementor-section')
                .prev().find('.rev3')
                .click();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
        $('.rev4').click(function () {
            $(this).closest(
                    '.elementor-section')
                .next().slideToggle();
            $(this).toggleClass('opened');
        });
        $('.closebutton').click(function () {
            $(this).closest(
                    '.elementor-section')
                .prev().find('.rev4')
                .click();
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
        $('.rev5').click(function () {
            $(this).closest(
                    '.elementor-section')
                .next().slideToggle();
            $(this).toggleClass('opened');
        });
        $('.closebutton').click(function () {
            $(this).closest(
                    '.elementor-section')
                .prev().find('.rev5')
                .click();
        });
    });
});