$(document).ready(function(){
    $('.card-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
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
        $('.card').removeClass('active');
        $('.card').addClass('active');
    });
    
    $('.card-wrapper').on('beforeChange', function(event, slick, currentSlide){
        $('.card').removeClass('active');
        $('.card').addClass('active');
    });
});