
$(document).ready(function () {



  scrollBtn = $('.scroll-button');
    //кнопка вверх
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1000) {
        scrollBtn.addClass('show');
      } else {
        scrollBtn.removeClass('show');
      }
    });


    
    scrollBtn.on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
    });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    }
  });


  $('.swiper__prev').on('click', function() {
    $('.swiper__prev').removeClass('button-prev');
    $('.swiper__prev').addClass('button-prev--dark');
    $('.swiper__next').removeClass('button-next--dark');
    $('.swiper__next').addClass('button-next');   
  }); 

  $('.swiper__next').on('click', function() {
    $('.swiper__prev').addClass('button-prev');
    $('.swiper__prev').removeClass('button-prev--dark');
    $('.swiper__next').addClass('button-next--dark');
    $('.swiper__next').removeClass('button-next');   
  });
  
  var mySwiper1 = new Swiper ('.swiper-container__services', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    centeredSlides: false,
    spaceBetween: 10,
    breakpoints: {   
     1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    660: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },  },

    // Navigation arrows
    navigation: {
      nextEl: '.services__next',
      prevEl: '.services__prev',
    }
  });

  $('.services__prev').on('click', function() {
    $('.services__prev').removeClass('button-prev');
    $('.services__prev').addClass('button-prev--dark');
    $('.services__next').removeClass('button-next--dark');
    $('.services__next').addClass('button-next');   
  }); 

  $('.services__next').on('click', function() {
    $('.services__prev').addClass('button-prev');
    $('.services__prev').removeClass('button-prev--dark');
    $('.services__next').addClass('button-next--dark');
    $('.services__next').removeClass('button-next');   
  }); 




//burger-menu
  $(function(){
    /*--------- show and hide the menu  ---*/
    $('.button').on("click", function(){
      if($('body').hasClass('nav_is_visible') == true){
       $('body').removeClass('nav_is_visible');
       $('.button').removeClass('close');
          }
      else{
       $('body').addClass('nav_is_visible');
       $('.button').addClass('close');
         }
     });
    
    $('body').addClass('home_is_visible');
  
      
   function removeClasses() {
    $(".menu ul li").each(function() {
      var custom_class = $(this).find('a').data('class');
    $('body').removeClass(custom_class);
    });
  }
    
    $('.menu a').on('click',function(e){
      e.preventDefault();
      removeClasses();
      var custom_class = $(this).data('class');
      $('body').addClass(custom_class);
    });


    
    
  });
//end


});





//часы
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//конец часов