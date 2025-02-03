"use client";

import { useEffect, useState } from "react";
import { useGetUserData } from "@/services/queries";
import ModalContainer from "@/components/partilas/containers/ModalContainer/ModalContainer";
import SendOTP from "./SendOTP/SendOTP";
import CheckOTP from "./CheckOTP/CheckOTP";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { deleteCookie } from "@/core/utils/cookie";
import DropDown from "../DropDown/DropDown";

function AuthForm() {
	const [mobile, setMobile] = useState("");
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(false);
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		!isOpen && setMobile("");
	}, [isOpen]);

	const { data, refetch, isError } = useGetUserData(enabled);

	const logoutHandler = () => {
		deleteCookie("accessToken");
		deleteCookie("refreshToken");
		console.log("fgdfg");
		setEnabled(false);
		refetch();
	};

	if (data?.data && !isError)
		return <DropDown logoutHandler={logoutHandler} {...data.data} />;

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="flex items-center max-lg:order-3 max-lg:rounded-full py-1.5 px-1.5 lg:px-5 border-2 border-primary text-primary rounded-lg hover:text-white hover:bg-primary transition-all duration-300"
			>
				<FaUser />
				<span className="ms-1 font-medium text-lg max-lg:hidden">
					ورود&nbsp; |&nbsp; ثبت نام
				</span>
			</button>
			<ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
				{step === 1 && (
					<SendOTP
						setStep={setStep}
						mobile={mobile}
						setMobile={setMobile}
						isOpen={isOpen}
					/>
				)}

				{step === 2 && (
					<CheckOTP
						mobile={mobile}
						setIsOpen={setIsOpen}
						setStep={setStep}
						setMobile={setMobile}
					/>
				)}
			</ModalContainer>
		</>
	);

	// if (data?.data) return <Link href="/profile">ورود به حساب کاربری</Link>;
}

export default AuthForm;
