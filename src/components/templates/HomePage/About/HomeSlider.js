"use client";
import slide1 from "@/assets/images/home/slider/slide1.webp";
import slide2 from "@/assets/images/home/slider/slide2.webp";
import slide3 from "@/assets/images/home/slider/slide3.webp";
import slide4 from "@/assets/images/home/slider/slide4.webp";

const sliders = [slide1, slide2, slide3, slide4];
import styles from "./HomeSlider.module.scss";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function HomeSlider() {
	const [active, setActive] = useState(0);
	const slidesCount = sliders.length;
	const imageWidth = 389;
	const baseGap = 20; //فاصله افقی بین اسلایدها
	const [transformStyle, setTransformStyle] = useState([]);

	useEffect(() => {
		const newStyles = [];
		let basicNextIndex = 0;

		for (let i = active; i < slidesCount + active; i++) {
			let index = i < slidesCount ? i : i - slidesCount;
			const scale = 1 - basicNextIndex / 10;
			const translate = -(
				((imageWidth / 10) * basicNextIndex) / 2 +
				baseGap * basicNextIndex
			);
			const z = 100 - i;

			newStyles[index] = {
				transform: `scale(${scale}) translateX(${translate}px)`,
				zIndex: z,
			};

			basicNextIndex += 1;
		}
		setTransformStyle(newStyles);
	}, [active]);

	const nextHandler = () => {
		setActive((prev) => (prev + 1) % sliders.length);
	};

	const prevHandler = () => {
		setActive((prev) => (prev - 1 + sliders.length) % sliders.length);
	};

	return (
		<>
			<div className={styles.slider}>
				{sliders.map((slide, index) => (
					<figure
						key={index}
						className={`${index === active ? styles.active : ""}`}
						style={transformStyle[index]}
					>
						<img src={slide.src} width={389} height={479} />
					</figure>
				))}

				<div className="flex items-center justify-center mt-4 text-lg" dir="ltr">
					<button
						onClick={prevHandler}
						className={`${active === 0 && "opacity-40 pointer-events-none"}`}
					>
						<FaArrowLeft />
					</button>
					<span className="block mx-2">
						{active + 1} / {slidesCount}
					</span>
					<button
						onClick={nextHandler}
						className={`${
							active === slidesCount - 1 && "opacity-40 pointer-events-none"
						}`}
					>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</>
	);
}

export default HomeSlider;
