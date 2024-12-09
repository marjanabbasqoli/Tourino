"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getProfile } from "@/app/services/user";

import SendOTP from "../../../ui/molecole/SendOTP/SendOTP";
import CheckOTP from "../../../ui/molecole/CheckOTP/CheckOTP";

function Header() {
	const [mobile, setMobile] = useState("");
	const [step, setStep] = useState(1);
	const [modal, setModal] = useState(false);

	const queryKey = ["profile"];
	const queryFn = getProfile;

	const { data } = useQuery({
		queryKey,
		queryFn,
	});

	return (
		<>
			<div>
				{data ? "dashboard" : <button onClick={() => setModal(true)}>ورود</button>}
			</div>

			{modal && (
				<div className="modal">
					{step === 1 && (
						<SendOTP
							setStep={setStep}
							mobile={mobile}
							setMobile={setMobile}
							setModal={setModal}
						/>
					)}

					{step === 2 && (
						<CheckOTP
							mobile={mobile}
							setModal={setModal}
							setStep={setStep}
							setMobile={setMobile}
						/>
					)}
				</div>
			)}
		</>
	);
}

export default Header;
