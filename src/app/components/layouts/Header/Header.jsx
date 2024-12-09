"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProfile } from "@/app/services/user";

import SendOTP from "../../../ui/molecole/SendOTP/SendOTP";
import CheckOTP from "../../../ui/molecole/CheckOTP/CheckOTP";

function Header() {
	const [mobile, setMobile] = useState("");
	const [step, setStep] = useState(1);

	const queryKey = ["profile"];
	const queryFn = getProfile;

	const { data } = useQuery({
		queryKey,
		queryFn,
	});

	return (
		<>
			<div>{data ? "dashboard" : <button>ورود</button>}</div>

			{step === 1 && (
				<SendOTP setStep={setStep} mobile={mobile} setMobile={setMobile} />
			)}

			{step === 2 && <CheckOTP mobile={mobile} />}
		</>
	);
}

export default Header;
