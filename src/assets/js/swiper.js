/* eslint-disable no-unused-vars */
import Swiper from '../../../node_modules/swiper/swiper-bundle';

const sliderActivity = document.querySelector('.js-slider-activity-init');
const sliderTimetable = document.querySelector('.js-slider-timetable-init');

if (sliderActivity) {
	const swiper = new Swiper(sliderActivity, {
		slidesPerView: 'auto',
		freeMode: true,
		freeModeSticky: true,
		grabCursor: true,
		freeModeMomentumRatio: 0.2,
		speed: 1000,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	});
}

if (sliderTimetable) {
	const swiper = new Swiper(sliderTimetable, {
		slidesPerView: 1.3,
		spaceBetween: 15,
		freeModeSticky: true,
		grabCursor: true,
		pauseOnMouseEnter: true,
		speed: 800,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			// when window width is >= 375px
			375: {
				slidesPerView: 1.4,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 2.8,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 3.5,
				spaceBetween: 30,
			},
			1490: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1920: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});
}
