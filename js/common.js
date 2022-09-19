$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
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

// window.onload = function () {
//     const parallax = document.querySelector('.parallax')
//     if (parallax) {
//         //  Parallax scroll
//         const content = document.querySelector('.parallax__container')
//         const header = document.querySelector('.header')
//         let thresholdSets = [];
//         for (let i = 0; i <= 1.0; i+= 0.005) {
//             thresholdSets.push(i);
//         }
//         const callback = function (entries, observer) {
//             const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
//             setParallaxItemsStyle(scrollTopProcent)
//         };
//         const observer = new IntersectionObserver(callback, {
//             threshold: thresholdSets
//         });
//
//         observer.observe(document.querySelector('.content'));
//
//         function setParallaxItemsStyle(scrollTopProcent) {
//             content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%); `
//             header.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%); `
//         }
//     }
// }