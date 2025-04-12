import { FaQuestion } from "react-icons/fa6";
import HomeSlider from "./HomeSlider/HomeSlider";

function About() {
	return (
		<div className="container">
			<div className="grid lg:grid-cols-2 py-20 gap-6">
				<div className="place-content-center">
					<div className="flex items-center title mb-7">
						<i className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#28A745] to-[#10411B] me-4">
							<FaQuestion className="text-white text-4xl" />
						</i>
						<h2 className="text-[40px] font-bold">
							چرا <span className="text-primary">تورینو </span> ؟
						</h2>
					</div>
					<h3 className="text-2xl font-medium mb-4">تور طبیعت گردی و تاریخی</h3>
					<p className="text-lg lg:text-xl lg:leading-[44px] lg:max-w-[500px] text-justify">
						اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت
						چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی
						را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک
						مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
					</p>
				</div>

				<div className="w-full">
					<HomeSlider />
				</div>
			</div>
		</div>
	);
}

export default About;
