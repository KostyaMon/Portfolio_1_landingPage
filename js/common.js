$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
     $(".header__link").click(function (event) {
         $(".header__burger, .header__menu").removeClass("active");
         $("body").removeClass("lock");
    });
});
$('.parallaxie').parallaxie({
    speed: 0.4,
    size: 'cover',
});

const swiper = new Swiper('.swiper', {
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});