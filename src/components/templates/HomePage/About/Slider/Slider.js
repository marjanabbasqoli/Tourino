"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import slide1 from "@/assets/images/home/slider/01.jpg";
import slide2 from "@/assets/images/home/slider/02.jpg";
import slide3 from "@/assets/images/home/slider/03.jpg";
import slide4 from "@/assets/images/home/slider/04.jpg";

const sliders = [slide1, slide2, slide3, slide4];

function Slider() {
	return (
		<Swiper
			effect={"cards"}
			cardsEffect={{
				perSlideRotate: 0,
				perSlideOffset: 18,
				rotate: false,
				slideShadows: false,
			}}
			grabCursor={true}
			modules={[EffectCards, Pagination, Navigation, Autoplay]}
			className="mySwiper h-[479px] w-[389px] max-w-[52vw]"

			// pagination={{
			// 	type: "fraction",
			// }}
			// navigation={true}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
		>
			{sliders.map((slide, index) => (
				<SwiperSlide key={index}>
					<Image
						src={slide}
						width={389}
						height={479}
						alt={`slide${index}`}
						className="rounded-[60px] w-full h-full object-cover"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default Slider;
