$(document).ready(function () {
     $('.parallaxie').parallaxie({
    speed: 0.4,
    });
});
//Burger
const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_menuActive");
		menuBody.classList.toggle("_menuActive");
	})
}

// Smooth Scroll
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")

if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick)
	});

	function onMenuLinkClick(e) {
		const mediaQuery768 = window.matchMedia('(max-width: 768px)')
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValueHeaderOffset = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
			
			if (iconMenu.classList.contains("_menuActive")) {
				document.body.classList.remove("_lock");
				iconMenu.classList.remove("_menuActive");
				menuBody.classList.remove("_menuActive");
			}
			
			e.preventDefault();
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				if (mediaQuery768.matches) {
				window.scrollTo({
					top: gotoBlockValueHeaderOffset,
					behavior: "smooth"
				});
			}
		}
	}
}

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//========================================== Animations
const scrollAnim = document.querySelectorAll('.scrollAnim'); // use on active block

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

