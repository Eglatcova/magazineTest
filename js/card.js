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
  
  
  
  

//доставка. начало
  $('#delivery').click(function(){ 
     var deliveryChoice = $('.delivery__content');
    
     var deliveryDelivery = "<h3 class=\"content__title\">Куда доставить?</h3> <div class=\"content__boxes\">      <div class=\"content__box\">        <input type=\"radio\" id=\"address-3\" checked=\"checked\" name=\"payment-2\">        <label for=\"address-3\">Пункт выдачи</label>      </div>      <div class=\"content__box\">        <input type=\"radio\" id=\"address-4\" name=\"payment-2\">        <label for=\"address-4\">На дом</label>      </div>    </div>    </div> ";
     deliveryChoice.html(deliveryDelivery);
     
     var deliveryClicked1 = $('.delivery__choice-1');
     var deliveryClicked2 = $('.delivery__choice-2');

     deliveryClicked1.removeClass('delivery__choice--clicked');
     deliveryClicked2.addClass('delivery__choice--unclicked');
  });


  $('#pickup').click(function(){
   var deliveryChoice = $('.delivery__content');
   var deliveryPickup = "   <h3 class=\"content__title\">Пункты самовывоза</h3> <div class=\"content__boxes\">      <div class=\"content__box\">        <input type=\"radio\" id=\"address-1\" checked=\"checked\" name=\"payment-2\">        <label for=\"address-1\">Мангеликель 17 ЖК Коркем (Мангеликель 17)</label>      </div>      <div class=\"content__box\">        <input type=\"radio\" id=\"address-2\" name=\"payment-2\">        <label for=\"address-2\">Шоурум № 1 2018 (Абая 8 Торговый дом Алтын)</label>      </div>    </div>    </div>  ";
    deliveryChoice.html(deliveryPickup);

  var deliveryClicked1 = $('.delivery__choice-1');
  var deliveryClicked2 = $('.delivery__choice-2');

  deliveryClicked1.addClass('delivery__choice--clicked');
  deliveryClicked2.removeClass('delivery__choice--unclicked');
  });
  //конец

//слайдер продукты
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 25,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  //end


  $('.characteristic__button-2').click(function(){

    var infoyChoice = $('.characteristic__ul-wrap');
    var infoContent = "<div class=\"characteristic__space\"></div> ";

    infoyChoice.html(infoContent);

    $('.characteristic__button-2').addClass('characteristic__button--active');
    $('.characteristic__button-1').removeClass('characteristic__button--active');
    $('.characteristic__button-3').removeClass('characteristic__button--active');
  });


  $('.characteristic__button-3').click(function(){

    var infoyChoice = $('.characteristic__ul-wrap');
    var infoContent = "<div class=\"characteristic__space\"></div> ";

    infoyChoice.html(infoContent);

    $('.characteristic__button-3').addClass('characteristic__button--active');
    $('.characteristic__button-1').removeClass('characteristic__button--active');
    $('.characteristic__button-2').removeClass('characteristic__button--active');
  });




  $('.characteristic__button-1').click(function(){

    var infoyChoice = $('.characteristic__ul-wrap');
    var infoContent = "    <div class=\"characteristic__ul characteristic__ul--first\">    <li class=\"characteristic__item\">ИНТ товара:</li>    <li class=\"characteristic__item\">Номер товара:</li>    <li class=\"characteristic__item\">Тип предложения:</li>    <li class=\"characteristic__item\">Форма:</li>    <li class=\"characteristic__item\">Категория:</li>    <li class=\"characteristic__item\">Страна производитель: </li>    <li class=\"characteristic__item\">Компания производитель:</li></div><div class=\"characteristic__ul characteristic__ul--second\">   <li class=\"characteristic__item\">GCN8C1593</li>   <li class=\"characteristic__item\">1344</li>   <li class=\"characteristic__item\">Розничное</li>   <li class=\"characteristic__item\">Обычная продажа</li>   <li class=\"characteristic__item\">Рюкзаки</li>   <li class=\"characteristic__item\">Китай (CN)</li>   <li class=\"characteristic__item\">PUMA</li></div> ";

    infoyChoice.html(infoContent);

    $('.characteristic__button-1').addClass('characteristic__button--active');
    $('.characteristic__button-2').removeClass('characteristic__button--active');
    $('.characteristic__button-3').removeClass('characteristic__button--active');
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
  //color blocks
$('.color__tag1').click(function(){
  $('.color__tag1').addClass('color__tag--click');
  $('.color__tag2').removeClass('color__tag--click');
  $('.color__tag3').removeClass('color__tag--click');
  $('.color__tag4').removeClass('color__tag--click');
});
$('.color__tag2').click(function(){
  $('.color__tag2').addClass('color__tag--click');
  $('.color__tag1').removeClass('color__tag--click');
  $('.color__tag3').removeClass('color__tag--click');
  $('.color__tag4').removeClass('color__tag--click');
});
$('.color__tag3').click(function(){
  $('.color__tag3').addClass('color__tag--click');
  $('.color__tag1').removeClass('color__tag--click');
  $('.color__tag2').removeClass('color__tag--click');
  $('.color__tag4').removeClass('color__tag--click');
});
$('.color__tag4').click(function(){
  $('.color__tag4').addClass('color__tag--click');
  $('.color__tag1').removeClass('color__tag--click');
  $('.color__tag2').removeClass('color__tag--click');
  $('.color__tag3').removeClass('color__tag--click');
});
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



  
var mySwiper1 = new Swiper ('.swiper-container__offer', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.offer__next',
    prevEl: '.offer__prev',
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



