import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItems({ item, index }) {
	const currentPath = usePathname();
	return (
		<li
			className={`ml-10 transition-colors max-lg:mb-[22px] ${
				currentPath === item.link ? "text-primary" : "text-base"
			}`}
		>
			<Link href={item.link} className="flex items-center">
				<i className="lg:hidden max-lg:me-2">{item.icon}</i>
				{item.title}
			</Link>
		</li>
	);
}

export default NavbarItems;
