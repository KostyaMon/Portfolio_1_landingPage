$(document).ready(function () {
    $(".header__burger").click(function () {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
     $(".header__link").click(function () {
         $(".header__burger, .header__menu").removeClass("active");
         $("body").removeClass("lock");
    });
     $('.parallaxie').parallaxie({
    speed: 0.4,
    });
});

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});