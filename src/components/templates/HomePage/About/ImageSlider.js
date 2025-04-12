"use client";
import React, { useState, useRef } from "react";

const images = [
	"@/assets/images/home/slider/slide1.webp",
	"https://via.placeholder.com/389x479/DC143C/FFFFFF?text=2",
	"https://via.placeholder.com/389x479/008B8B/FFFFFF?text=3",
	"https://via.placeholder.com/389x479/6A5ACD/FFFFFF?text=4",
];

const ImageSlider = () => {
	const [current, setCurrent] = useState(0);
	const sliderRef = useRef(null);
	const imageWidth = 389;
	const baseScale = 1;
	const scaleStep = 0.1;

	const clampIndex = (index) => Math.max(0, Math.min(images.length - 1, index));

	const goTo = (index) => {
		setCurrent(clampIndex(index));
	};

	// Drag logic
	let startX = null;

	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		if (!startX) return;
		const deltaX = e.touches[0].clientX - startX;
		if (Math.abs(deltaX) > 50) {
			goTo(current + (deltaX > 0 ? -1 : 1));
			startX = null;
		}
	};

	const handleMouseDown = (e) => {
		startX = e.clientX;
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (e) => {
		if (!startX) return;
		const deltaX = e.clientX - startX;
		if (Math.abs(deltaX) > 50) {
			goTo(current + (deltaX > 0 ? -1 : 1));
			startX = null;
			handleMouseUp(); // Clean up
		}
	};

	const handleMouseUp = () => {
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
		startX = null;
	};

	return (
		<div
			className="w-full flex flex-col items-center gap-4 select-none"
			dir="rtl"
		>
			<div
				ref={sliderRef}
				className="relative w-[389px] h-[479px] overflow-hidden"
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onMouseDown={handleMouseDown}
			>
				{images.map((src, index) => {
					const relativeIndex = index - current;
					const scale = baseScale - Math.abs(relativeIndex) * scaleStep;
					const shift = (-(1 - scale) * imageWidth) / 2 + relativeIndex * 40;
					const zIndex = 100 - Math.abs(relativeIndex);

					return (
						<img
							key={index}
							src={src}
							alt={`slide-${index}`}
							className="absolute top-0 left-0 rounded-2xl shadow-lg transition-all duration-500 cursor-grab"
							style={{
								width: `${imageWidth}px`,
								height: `479px`,
								transform: `scale(${scale}) translateX(${shift}px)`,
								zIndex,
							}}
							draggable={false}
						/>
					);
				})}
			</div>

			<div className="flex gap-4">
				<button
					className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
					onClick={() => goTo(current - 1)}
					disabled={current === 0}
				>
					قبلی
				</button>
				<button
					className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
					onClick={() => goTo(current + 1)}
					disabled={current === images.length - 1}
				>
					بعدی
				</button>
			</div>
		</div>
	);
};

export default ImageSlider;
