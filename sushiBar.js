$(document).ready(function () {

    //  Toggler Button

    $('.navbar-toggler').click(function () {


        $('.navbar-toggler').toggleClass('change');

    });


    //  Sticky Navbar

    $(window).scroll(function () {


        let position = $(this).scrollTop();

        if (position >= 718) {

            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');

        } else {

            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }


    });


     

    $('.nav-item a, .header-link').click(function (link) {

        link.preventDefault();

        let target = $(this).attr('href');

        
        $('html, body').stop().animate({

            scrollTop: $(target).offset().top - 25

        },3000);

    });


    // Ripple

    $('#header, .info').ripples({
        dropRadius: 25,
        perturbance: 0.6,

    });

    // Magnific Popup

    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        },
        type: 'image'
        // other options
    });

});