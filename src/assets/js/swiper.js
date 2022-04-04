/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderActivity = document.querySelector('.js-slider-activity-init');

if (sliderActivity) {
	const swiper = new Swiper(sliderActivity, {
		loop: true,
		slidesPerView: 'auto',
		speed: 1000,
		freeMode: true,
		freeModeSticky: true,
		grabCursor: true,
		freeModeMomentumRatio: 0.2,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}
