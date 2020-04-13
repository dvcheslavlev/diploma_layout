$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass:true,
    nav: true,
    navContainer: '.slider-nav-container',
    navText: [''],
    responsive:{
        0:{
            items:1
        },
        769:{
            items:2,
            dots:true
        },
        1025:{
            items:3,
            dots:false
        }
    }
});

$(function(){
    const mobMenuBtn = $('.headbar__menu-btn_mobile');
    const recallBtn = $('.recall_btn');

    mobMenuBtn.click(function(){
        $('.popup__container').fadeIn(600);
        $('.dropdown-menu').animate({
            left: '0px',
        },  400);
    });

    recallBtn.click(function(){
        $('.popup__container').css('background', 'linear-gradient(0deg, rgba(242, 101, 34, 0.9), rgba(250, 8, 145, 0.05))');
        $('.recall-form__container').css('display', 'flex');
        $('.popup__container').fadeIn(600);
        $('.recall-form__container').fadeIn(300);
    });

    $('.popup__container').click(function(event){
        if(event.target == this) {
            $(this).fadeOut(400);
            $(this).css('background', '');
            $('.dropdown-menu').animate({
                left: '-220',
            },  400);
            $('#client-name').val('');
            $('#client-email').val('');
            $('#client-phone-number').val('');
            $('.recall-form__container').fadeOut(200);
        }
    });
});


