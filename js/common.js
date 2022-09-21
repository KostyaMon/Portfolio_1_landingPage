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

//========================================== Animations
const scrollAnim = document.querySelectorAll('.scrollAnim');

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

if (scrollAnim.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function  animOnScroll() {
		for (let i = 0; i < scrollAnim.length; i++) {
			const animItem = scrollAnim[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} else {
					if (animItem.classList.contains('repeatingAnimation')) {
						animItem.classList.remove('_active');
					}
			}
		}
	}
}

setTimeout(() => {
	animOnScroll()
}, 300)
//========================================== End Animations