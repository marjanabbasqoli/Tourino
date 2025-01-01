"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";



import SendOTP from "./AuthForm/SendOTP/SendOTP";
import CheckOTP from "./AuthForm/CheckOTP/CheckOTP";
import ModalContainer from "@/components/partilas/containers/ModalContainer/ModalContainer";
import AuthForm from "./AuthForm/AuthForm";

function Header() {
	

	// const { data } = useQuery({
	// 	queryKey,
	// 	queryFn,
	// });

	// if (data?.data) return <Link href="/profile">ورود به حساب کاربری</Link>;

	return (
		<>
			<AuthForm />
			{/* <div>
				<button onClick={() => setIsOpen(true)}>ورود</button>
			</div>

			<ModalContainer>
				<div className="modal">
					{step === 1 && (
						<SendOTP
							setStep={setStep}
							mobile={mobile}
							setMobile={setMobile}
							setIsOpen={setIsOpen}
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
				</div>
			</ModalContainer> */}
		</>
	);
}

export default Header;
