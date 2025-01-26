import Image from "next/image";
import man from "@/assets/images/home/contact/man.webp";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

function Contact() {
	return (
		<div className="container pt-28 pb-14">
			<div className="grid lg:grid-cols-3">
				<div className="lg:col-span-2 text-white bg-primary max-lg:rounded-t-[10px] lg:rounded-s-[10px] relative">
					<div className="flex justify-between max-lg:pt-3 max-lg:pb-12">
						<div className="self-center px-3 table mx-auto max-sm:pe-[55%] max-lg:pe-[308px]">
							<p className="text-[5vw] lg:text-4xl xl:text-5xl leading-[1.5417] font-bold lg:mb-2 ">
								خرید تلفنی از <span className="text-primaryDark">تورینو&nbsp;</span>
							</p>
							<p className="text-[3.5vw] lg:text-[1.5rem] xl:text-[2rem] leading-[1.5625]">
								به هرکجا که میخواهید!
							</p>
						</div>
						<Image
							src={man}
							width={308}
							height={225}
							alt="sales-man"
							className="max-lg:max-w-[55%] max-lg:absolute end-0 bottom-0 lg:me-11 lg:ms-4 mt-[26px] self-end"
						/>
					</div>
				</div>
				<div className="border max-lg:border-t-0 border-gray max-lg:rounded-b-[10px] lg:rounded-e-[10px] lg:flex items-center justify-center px-4 py-3">
					<div className="max-lg:flex justify-center items-center">
						<a
							href="to:0211840"
							className="flex items-center text-2xl lg:text-3xl font-bold max-lg:ms-4 lg:mb-4"
							dir="ltr"
						>
							<FaPhone className="text-xl lg:text-2xl me-2.5" />
							021-1840
						</a>
						<Link
							href="/"
							className="bg-primaryDark text-white rounded-lg block grow text-center font-medium hover:bg-primary transition-colors duration-300 max-w-36 px-2 max-sm:text-sm !leading-10"
						>
							اطلاعات بیشتر
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
