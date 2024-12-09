import { useState } from "react";

import OtpInput from "react18-input-otp";
import { useQuery } from "@tanstack/react-query";

import { setCookie } from "@/app/utils/cookie";
import { getProfile } from "@/app/services/user";
import { checkOtp } from "@/app/services/auth";

function CheckOTP({ mobile }) {
	const [code, setCode] = useState("");

	const queryKey = ["profile"];
	const queryFn = getProfile;

	const { refetch } = useQuery({
		queryKey,
		queryFn,
	});

	const submitHandler = async (e) => {
		e.preventDefault();
		const { response, error } = await checkOtp(mobile, code);
		if (response) {
			setCookie(response.data);
			// navigate("/");
			refetch();
		}
		if (error) console.log(error.response.data.message);
	};

	return (
		<form dir="ltr" onSubmit={submitHandler}>
			<OtpInput
				numInputs={6}
				id="myInput"
				placeholder=""
				value={code}
				onChange={(enteredCode) => {
					setCode(enteredCode);
				}}
				isSuccessed={false}
				errorStyle="error"
				successStyle="success"
				separator={<span>-</span>}
				separateAfter={1}
				shouldAutoFocus
			/>
			<button type="submit">ورود به تورینو</button>
		</form>
	);
}

export default CheckOTP;
