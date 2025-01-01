import { useEffect, useState } from "react";

import OtpInput from "react18-input-otp";
import { useQuery } from "@tanstack/react-query";

import { setCookie } from "@/core/utils/cookie";
import { getProfile } from "@/services/user";
import { checkOtp, sendOtp } from "@/services/auth";
import Countdown from "react-countdown";

function CheckOTP({ mobile, setModal, setStep, setMobile }) {
	const [code, setCode] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [key, setKey] = useState(false);

	useEffect(() => {}, []);

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
			setCookie("accessToken", response.data.accessToken, 30);
			setCookie("refreshToken", response.data.refreshToken, 365);
			setModal(false);
			refetch();
		}

		if (error) console.log(error.response.data.message);

		// setDisabled(true);
	};

	// const setResendTime = () => {
	// 	setTimeout(() => {
	// 		setDisabled(false);
	// 	}, 10000);
	// };

	// setResendTime();

	const backHandler = () => {
		setStep(1);
		setMobile("");
	};

	const resendHandler = async () => {
		// setDisabled(true);
		setKey(true);
		await sendOtp(mobile);
		// setResendTime();
		return;
	};

	const Completionist = () => <button onClick={resendHandler}>resend</button>;
	const timerRenderer = (props) => {
		if (props.completed) {
			return <Completionist />;
		} else {
			// setKey(false);
			return (
				<div>
					{props.formatted.minutes}:{props.formatted.seconds}
					<span>تا ارسال مجدد کد</span>
				</div>
			);
		}
	};

	return (
		<>
			<button onClick={backHandler}>back</button>
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

				<Countdown
					date={Date.now() + 2 * 60 * 1000}
					key={key}
					renderer={timerRenderer}
					zeroPadTime={2}
				>
					<Completionist />
				</Countdown>

				<button type="submit" data-disabled={disabled}>
					ورود به تورینو
				</button>
			</form>
		</>
	);
}

export default CheckOTP;
