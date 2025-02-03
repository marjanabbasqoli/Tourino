import Link from "next/link";
import Menu from "./Menu/Menu";
import logo from "@/assets/images/tourino-logo.svg";
import Image from "next/image";
import Logos from "./Logos/Logos";

function Footer() {
	return (
		<>
			<div className="py-7 border-t border-gray">
				<div className="container">
					<div className="grid sm:grid-cols-2 sm:gap-4">
						<Menu />
						<div className="flex flex-col sm:items-end">
							<Link href="/" className="mb-5 hidden sm:block">
								<Image src={logo} width="146" height="44" alt="tourino logo" priority />
							</Link>
							<p className="text-lg font-medium mb-9 hidden sm:block">
								تلفن پشتیبانی:&nbsp;
								<a href="tel:021-8574" dir="ltr">
									021-8574
								</a>
							</p>
							<Logos />
						</div>
					</div>
				</div>
			</div>
			<div className="copyright text-center py-3 border-t border-gray">
				<div>
					کلیه حقوق این وب سایت متعلق به <span className="text-primary">تورینو</span>{" "}
					میباشد.
				</div>
			</div>
		</>
	);
}

export default Footer;
