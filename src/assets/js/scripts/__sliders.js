const sliders = () => {
	let ayarlar, href;
	document.addEventListener("DOMContentLoaded", function () {
		/* Slide */
		ayarlar = {
			slidesPerView: "auto",
			centeredSlides: true,
			mousewheel: false,
			allowTouchMove: false,

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			
			breakpoints: {
				768: {
					centeredSlides: false,
					direction: "vertical",
					slidesPerView: 3,
				},
			},
		};

		href = document.querySelector(".swiper");
		if (href) {
			const swiper = new Swiper(href, ayarlar);
		}
		/* Slide SON */
	});
};

export default sliders;
