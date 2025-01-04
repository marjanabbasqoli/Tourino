import { useState } from "react";

import OtpInput from "react18-input-otp";
import Countdown from "react-countdown";

import { useCheckOtp } from "@/services/mutations";

function CheckOTP({ mobile, setIsOpen, setStep, setMobile }) {
	const [code, setCode] = useState("");
	const [key, setKey] = useState("");
	const { isPending, mutate } = useCheckOtp();

	const submitHandler = async (e) => {
		e.preventDefault();

		if (isPending) return;

		mutate(
			{ mobile, code },
			{
				onSuccess: async (data) => {
					setIsOpen(false);
					setStep(1);
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);
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

	// const resendHandler = async () => {
	// 	// setDisabled(true);
	// 	setKey(true);
	// 	await useSendOtp(mobile);
	// 	// setResendTime();
	// 	return;
	// };

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

				<button type="submit">ورود به تورینو</button>
			</form>
		</>
	);
}

export default CheckOTP;
