$(document).ready(function () {
    $('.corousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        resposive: [
            {
                breakpoint: 430,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                }
            }
        ]
    });

    window.addEventListener('scroll', function () {
        let header = document.querySelector('#header')

        header.classList.toggle('roll', window.scrollY > 850)
    });
});