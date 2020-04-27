
//фильтры. начало
$('.select1').each(function(){
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class=\ \"select\ \"></div>');
  // Style box
  $('<div>',{
    class: 'select__gap',
    text: 'Сначала новые'
  }).insertAfter($this);
  
  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>',{
    class: 'select__list'
  }).insertAfter(selectGap);		

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for(var i = 0; i < selectOptionLength; i++){
    $('<li>',{
      class: 'select__item',
      html: $('<span>',{
        text: selectOption.eq(i).text()
      })				
    })
    .attr('data-value', selectOption.eq(i).val())
    .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function(){
    if(!$(this).hasClass('on')){
      $(this).addClass('on');
      selectList.slideDown(dur);

      selectItem.on('click', function(){
        var chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectList.slideUp(dur);
        selectGap.removeClass('on');
      });
      
    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
    }
  });		

});

$('.select2').each(function(){
  // Variables
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;

  $this.hide();
  // Wrap all in select box
  $this.wrap('<div class=\ \"select\ \"></div>');
  // Style box
  $('<div>',{
    class: 'select__gap',
    text: '15 на странице'
  }).insertAfter($this);
  
  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');
  // Add ul list
  $('<ul>',{
    class: 'select__list'
  }).insertAfter(selectGap);		

  var selectList = selectGap.next('.select__list');
  // Add li - option items
  for(var i = 0; i < selectOptionLength; i++){
    $('<li>',{
      class: 'select__item',
      html: $('<span>',{
        text: selectOption.eq(i).text()
      })				
    })
    .attr('data-value', selectOption.eq(i).val())
    .appendTo(selectList);
  }
  // Find all items
  var selectItem = selectList.find('li');

  selectList.slideUp(0);
  selectGap.on('click', function(){
    if(!$(this).hasClass('on')){
      $(this).addClass('on');
      selectList.slideDown(dur);

      selectItem.on('click', function(){
        var chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectList.slideUp(dur);
        selectGap.removeClass('on');
      });
      
    } else {
      $(this).removeClass('on');
      selectList.slideUp(dur);
    }
  });		

});
//конец

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

  $('.navigation__block--next').on('click', function() {
    $('.swiper__prev').removeClass('button-prev');
    $('.swiper__prev').addClass('button-prev--dark');
    $('.swiper__next').removeClass('button-next--dark');
    $('.swiper__next').addClass('button-next');   
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
    $('.sservices__prev').removeClass('button-prev');
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


$('.main__title-mobile').on('click', function() {
  $('.main__menu-mobile').removeClass('main__menu-mobile--hidden');
  $('.main__menu-mobile').addClass('main__menu-mobile--show');  
});


$('.close__svg').on('click', function() {
  $('.main__menu-mobile').removeClass('main__menu-mobile--show');
  $('.main__menu-mobile').addClass('main__menu-mobile--hidden');  
});

});
