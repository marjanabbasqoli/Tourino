"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/tourino-logo.svg";

import AuthForm from "./AuthForm/AuthForm";
import Navbar from "./Navbar/Navbar";

function Header() {
	return (
		<div className="shadow-[0px_1px_4px_0px_rgba(0,0,0,0.16)]">
			<div className="container">
				<div className="flex max-lg:justify-between items-center py-[15px]">
					<Link href="/" className="inline-block lg:me-[84px] max-lg:order-2">
						<Image src={logo} width="146" height="44" alt="tourino logo" priority />
					</Link>
					<Navbar />
					<AuthForm />
				</div>
			</div>
		</div>
	);
}

export default Header;
