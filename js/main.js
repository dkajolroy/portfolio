jQuery(document).ready(function () {
    jQuery('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout: 4000,
    });
    var typed2 = new Typed('#typed', {
        strings: [
            'Creative Lover',
            'Video Grapher',
            'Web Developer',
            'Application Developer',
            'Entreprenure'
        ],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 4000,
        loop: true
    });
    jQuery(".rating .counter").counterUp({
        delay: 10,
        time: 2000,
    });

    AOS.init({
        duration: 800,
    });

});