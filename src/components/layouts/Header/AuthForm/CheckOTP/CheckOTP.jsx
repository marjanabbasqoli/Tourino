import { useState } from "react";

import OtpInput from "react18-input-otp";
import Countdown from "react-countdown";

import { useCheckOtp, useSendOtp } from "@/services/mutations";
import { FaArrowLeftLong } from "react-icons/fa6";

import styles from "./CheckOTP.module.scss";

function CheckOTP({ mobile, setIsOpen, setStep, setMobile }) {
	const [code, setCode] = useState("");
	const [key, setKey] = useState("");
	const { isPending, mutate, isError, isSuccess } = useCheckOtp();
	const [errorM, setErrorM] = useState("");
	const { mutate: mutateMobile } = useSendOtp();
	const [stopCountdown, setStopCountdown] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (isPending) return;

		mutate(
			{ mobile, code },
			{
				onSuccess: async (data) => {
					if (!data) {
						setErrorM("فاقد اعتبار");
						setStopCountdown(true);
						return;
					}
					setIsOpen(false);
					setStep(1);
					console.log({ data });
				},
				// onError: async (error) => {
				// 	console.log({ error });
				// 	setErrorM(error);
				// },
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

	const resendHandler = async () => {
		// setDisabled(true);
		setErrorM("");
		setKey(Math.random() * 80000);
		setStopCountdown(false);

		// setResendTime();

		mutateMobile({ mobile });

		return;
	};

	const Completionist = () => (
		<button onClick={resendHandler} className="h-16">
			resend
		</button>
	);

	const timerRenderer = (props) => {
		if (props.completed) {
			return <Completionist />;
		} else {
			// setKey(false);
			return (
				<div className="text-xs text-grayDark mt-4 mb-7" dir="rtl">
					{props.formatted.minutes}:{props.formatted.seconds}&nbsp;
					<span>تا ارسال مجدد کد </span>
				</div>
			);
		}
	};

	return (
		<>
			<button
				onClick={backHandler}
				className="block absolute top-5 end-[30px] text-lg translate-x-[-90%] bg-white"
			>
				<FaArrowLeftLong />
			</button>
			<div className="text-2xl font-medium text-center mb-2">
				کد تایید را وارد کنید.
			</div>
			<div className="mb-4 text-center ">
				کد تایید به شماره 09224526847 ارسال شد
			</div>
			<form
				dir="ltr"
				onSubmit={submitHandler}
				className="flex flex-col items-center"
			>
				<div className="me-[-12px]">
					<OtpInput
						numInputs={6}
						id="myInput"
						placeholder=""
						value={code}
						onChange={(enteredCode) => {
							setCode(enteredCode);
						}}
						shouldAutoFocus={true}
						className="me-3"
						inputStyle={styles.OTPinput}
						// isSuccessed={false}
						// errorStyle="error"
						// successStyle="success"
						// separator={""}
						// separateAfter={1}
					/>
				</div>

				<div>
					<Countdown
						date={stopCountdown ? Date.now() : Date.now() + 0.05 * 60 * 1000}
						key={Date.now()}
						renderer={timerRenderer}
						zeroPadTime={2}
					>
						<Completionist />
					</Countdown>
				</div>

				<div>{errorM}</div>

				<button
					type="submit"
					className="bg-primary text-white rounded-md w-full h-14 font-medium text-lg text-center"
				>
					ورود به تورینو
				</button>
			</form>
		</>
	);
}

export default CheckOTP;
