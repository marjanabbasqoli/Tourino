"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";

import { mainMenu } from "@/core/constants/constants";
import NavbarItems from "./NavbarItems/NavbarItems";

function Navbar() {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="max-lg:order-1 max-lg:w-[44px] lg:grow">
			<span
				className={`
					bg-[rgba(0,0,0,0.25)]
					fixed 
					top-0 
					start-0
					w-full 
					h-full 
					before:z-8
					transition-all
					duration-300
					ease-in-out
					z-[1000]
					${isActive ? "visible opacity-100" : "invisible opacity-0"}`}
				onClick={() => setIsActive(false)}
			></span>

			<i onClick={() => setIsActive(true)} className="cursor-pointer lg:hidden ">
				<FaBars className="w-5 h-5" />
			</i>

			<ul
				className={`lg:grow max-lg:px-3 me-10 max-lg:fixed max-lg:py-8 top-0 start-0 bottom-0 lg:flex bg-white z-[1000] max-lg:w-[209px] rounded-e-xl transition-all duration-300 ease-in-out 
					${
						isActive
							? "visible translate-x-0"
							: "max-lg:invisible max-lg:translate-x-full"
					}`}
			>
				{mainMenu.map((item, index) => (
					<NavbarItems item={item} key={index} />
				))}
			</ul>
		</div>
	);
}

export default Navbar;
