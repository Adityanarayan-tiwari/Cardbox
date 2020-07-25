$(document).ready(function(){
    $('.card-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
    {
        breakpoint: 1240,
        settings: {
            arrows: true,
            slidesToShow: 3
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
        }
    ]
    });
    $('.card-wrapper').on('afterChange', function(event, slick, currentSlide){
        $('.slick-active p').removeClass('hidden');
        $('.slick-active p').addClass('animated bounce');
    });
    
    $('.slick-promo').on('beforeChange', function(event, slick, currentSlide){
        $('.slick-active p').removeClass('animated bounce');
        $('.slick-active p').addClass('hidden');
    });
});