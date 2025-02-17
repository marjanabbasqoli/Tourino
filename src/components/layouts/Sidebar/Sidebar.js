"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMoneyBillTransfer, FaTruckPlane, FaUser } from "react-icons/fa6";

const sidebar = [
	{
		title: "پروفایل",
		link: "/profile",
		icon: <FaUser />,
	},
	{
		title: "تورهای من",
		link: "/profile/my-tours",
		icon: <FaTruckPlane />,
	},
	{
		title: "تراکنش ها",
		link: "/profile/transactions",
		icon: <FaMoneyBillTransfer />,
	},
];

function Sidebar() {
	const currentPath = usePathname();
	return (
		<ul className="w-full max-lg:flex max-lg:border-b-2 lg:border border-grayLight lg:rounded-lg lg:overflow-hidden lg:divide-y divide-grayLight max-lg:mb-6">
			{sidebar.map((item, index) => (
				<li key={index} className="max-lg:flex-grow relative">
					<Link
						href={item.link}
						className={`flex items-center p-3 transition-colors delay-75 duration-300 max-lg:justify-center max-sm:text-sm after:absolute after:start-0 after:bottom-[-2px] after:w-full after:h-[3px] after:scale-x-90 after:transition-all after:duration-300 ${
							item.link === currentPath
								? "lg:bg-green-100 text-primary max-lg:after:bg-primary after:-scale-x-100"
								: ""
						}`}
					>
						<span className="me-2">{item.icon}</span>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Sidebar;
