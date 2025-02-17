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
		<ul className="border border-grayLight rounded-lg overflow-hidden divide-y divide-grayLight">
			{sidebar.map((item, index) => (
				<li key={index}>
					<Link
						href={item.link}
						className={`flex items-center p-3  transition-colors delay-75 duration-300 ${
							item.link === currentPath ? "bg-green-100 text-primary" : ""
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
