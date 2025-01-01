"use client";

import { useEffect, useState } from "react";
import { useGetUserData } from "@/services/queries";
import ModalContainer from "@/components/partilas/containers/ModalContainer/ModalContainer";
import SendOTP from "./SendOTP/SendOTP";
import CheckOTP from "./CheckOTP/CheckOTP";
import { useQuery } from "@tanstack/react-query";
import api from "@/core/configs/api";
import Link from "next/link";

function AuthForm() {
	const [mobile, setMobile] = useState("");
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		!isOpen && setMobile("");
	}, [isOpen]);

	const { data } = useGetUserData();

	if (data?.data) return <Link href="/profile">ورود به حساب کاربری</Link>;

	return (
		<>
			<button onClick={() => setIsOpen(true)}>ورود</button>
			<ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
				<div className="modal">
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
				</div>
			</ModalContainer>
		</>
	);
}

export default AuthForm;
