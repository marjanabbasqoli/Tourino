import { useOutsideAlerter } from "@/core/hooks/outside";
import Link from "next/link";
import { useRef, useState } from "react";
import {
	FaAngleDown,
	FaArrowRightFromBracket,
	FaCircleUser,
	FaUser,
} from "react-icons/fa6";

function DropDown({ logoutHandler, mobile }) {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, () => setIsOpen(false));

	return (
		<div className="relative max-lg:order-3 lg:w-52" ref={wrapperRef}>
			<button
				className="flex justify-center text-primary text-lg w-full"
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				<FaUser className="max-lg:hidden" />
				<span className="inline-block font-medium mx-2 max-lg:hidden text-start">
					{mobile}
				</span>
				<FaAngleDown className="max-lg:hidden" />
			</button>
			<button
				className="flex items-center lg:hidden  rounded-full py-1.5 px-1.5 border-2 border-primary text-primary hover:text-white hover:bg-primary transition-all duration-300"
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				<FaUser />
			</button>
			<ul
				className={`rounded-xl bg-white shadow-sm absolute top-[100%] lg:start-0 max-lg:end-0 w-52 *:p-3 *:flex *:items-center transition-all duration-300 max-lg:mt-2 ${
					!isOpen && "!mt-3 opacity-0 invisible"
				}`}
			>
				<li className="bg-[#F4F4F4] rounded-t-xl">
					<FaCircleUser className="me-2 text-xl text-[#696969]" />
					<span className="text-[#10411B] font-bold relative top-[2px] text-lg">
						{mobile}
					</span>
				</li>
				<li className="!pb-0">
					<Link
						href="/profile"
						className="flex hover:text-primary transition-colors border-b border-grayLight w-full pb-3 text-sm font-medium"
						onClick={() => setIsOpen(false)}
					>
						<FaUser className="me-2" />
						اطلاعات حساب کاربری
					</Link>
				</li>
				<li>
					<button
						onClick={logoutHandler}
						className="flex items-center text-[#D40000]"
					>
						<FaArrowRightFromBracket className="me-2" />
						<span className="text-sm font-medium">خروج از حساب کاربری</span>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default DropDown;
