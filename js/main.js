$(function(){

    $('.toggle-btn').click(function() { // Открыть закрыть меню
        $(this).toggleClass('toggle-btn__active');
        $('.menu').toggleClass('menu__active')
    });

    $(".navigation, .nav").on("click","a", function (event) { //Плавная прокрутка страницы
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $('.navigation ul li a').click(function() { // закрытие меню по клику на ссылку
        if ( $('.menu').hasClass('menu__active')) {
         $('.menu').removeClass('menu__active');
         $('.toggle-btn').removeClass('toggle-btn__active');
        }
     });

    new WOW().init();

});