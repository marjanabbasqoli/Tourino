import { footerMenu, servicesMenu } from "@/core/constants/constants";
import Link from "next/link";

function Menu() {
	return (
		<div className="grid grid-cols-2 mb-9 lg:grid-cols-3 sm:mb-0">
			<div className="menu">
				<h3 className="font-semibold text-xl mb-3 sm:text-2xl sm:mb-6">
					{footerMenu.title}
				</h3>
				<ul>
					{footerMenu.items.map((item, index) => (
						<li
							key={index}
							className="sm:text-lg mb-2 hover:text-primary transition-colors duration-300 table"
						>
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="menu">
				<h3 className="font-semibold text-xl mb-3 sm:text-2xl sm:mb-6">
					{servicesMenu.title}
				</h3>
				<ul>
					{servicesMenu.items.map((item, index) => (
						<li
							key={index}
							className="sm:text-lg mb-2 hover:text-primary transition-colors duration-300 table"
						>
							<Link href={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Menu;
