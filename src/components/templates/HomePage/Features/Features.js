import Image from "next/image";

import price from "@/assets/images/home/features/price.jpg";
import comments from "@/assets/images/home/features/comments.jpg";
import hearts from "@/assets/images/home/features/hearts.jpg";

const features = [
	{
		title: "بصرفه ترین قیمت",
		image: price,
		content: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
	},
	{
		title: "پشتیبانی",
		image: comments,
		content: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
	},
	{
		title: "رضایت کاربران",
		image: hearts,
		content: "رضایت بیش از 10هزار کاربر از تور های ما. ",
	},
];

function Features() {
	return (
		<div className="container">
			<div className="grid sm:grid-cols-3 gap-8 border-t border-gray py-[30px]">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex sm:max-lg:flex-col lg:flex-row items-center"
					>
						<figure className="flex-shrink-0 sm:max-lg:mb-3 lg:me-2 max-sm:max-w-20 max-sm:me-2 sm:max-xl:min-h-28 sm:max-xl:flex sm:max-xl:items-center">
							<Image
								src={feature.image}
								width={110}
								height={110}
								alt={feature.title}
							/>
						</figure>
						<div className="sm:max-lg:text-center">
							<div className="text-xl lg:text-2xl font-bold mb-2">{feature.title}</div>
							<div className="lg:max-w-48">{feature.content}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Features;
