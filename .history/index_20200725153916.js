
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("btnactive");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" btnactive", "");
  }
  this.className += " btnactive";
  });
}

function myFunction() {
    var element, name, arr;
    var btnselement = getElementsByClassName("slick-center");
    name = "active";
    arr = btnselement.className.split(" ");
    if (arr.indexOf(name) == -1) {
        btnselement.className += " " + name;
    }
  }







$(document).ready(function(){
    $('.card-wrapper').slick({
        
    slidesToShow: 3,
    slidesToScroll: 1,
    
    accessibility: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '0px',

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
    // $('.card-wrapper').on('afterChange', function(event, slick, currentSlide){
    //     $('.card').removeClass('active');
    //     $('.card').addClass('active');
    // });
    
    // $('.card-wrapper').on('beforeChange', function(event, slick, currentSlide){
    //     $('.card').removeClass('active');
    //     $('.card').addClass('active');
    // });

});









