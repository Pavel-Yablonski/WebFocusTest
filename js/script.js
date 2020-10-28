$(document).ready(function(){
    $('.slider').slick({
        autoplay: 100000,
        dots: false,
        slidesToShow: 1,
        speed: 1000,
    });

    $('.foto-slider').slick({
        dots: false,
        slidesToShow: 1,
        speed: 1000,
    });

    $('.reviews-slider').slick({
        dots: true,
        slidesToShow: 1,
        speed: 1000,
    });

    $('.adaptive__reviews-slider').slick({
        dots: true,
        slidesToShow: 1,
        speed: 1000,
    });
}); 

function burgerMenu() {
    document.querySelector(".header__menu-burger").classList.toggle("header__menu-burger-active");
    document.querySelector(".header__menu-list").classList.toggle("header__menu-list_show");
}