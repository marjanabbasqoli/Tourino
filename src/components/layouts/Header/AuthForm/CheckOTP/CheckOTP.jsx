import { useState } from "react";

import OtpInput from "react18-input-otp";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useCheckOtp, useSendOtp } from "@/services/mutations";
import CountDown from "@/components/modules/CountDown/CountDown";

import styles from "./CheckOTP.module.scss";

function CheckOTP({ mobile, setIsOpen, setStep, setMobile }) {
	const [code, setCode] = useState("");
	const [error, setError] = useState("");
	const [stopCountdown, setStopCountdown] = useState(false);
	const { isPending, mutate } = useCheckOtp();
	const { mutate: mutateMobile } = useSendOtp();

	const messageStyle = error.length
		? "bg-red-50 text-rose-600"
		: !stopCountdown
		? "bg-green-50 text-green-600"
		: "bg-orange-50 text-orange-600";

	const submitHandler = (e) => {
		e.preventDefault();
		setStopCountdown(true);

		if (isPending) return;

		mutate(
			{ mobile, code },
			{
				onSuccess: (data) => {
					if (!data) {
						setError("کد وارد شده صحیح نیست");
						return;
					}
					setIsOpen(false);
					setStep(1);
				},
			}
		);
	};

	const backHandler = () => {
		setStep(1);
		setMobile("");
		return;
	};

	const resendHandler = () => {
		setStopCountdown(false);
		setError("");
		mutateMobile({ mobile });
		return;
	};

	return (
		<>
			<button
				onClick={backHandler}
				className="block absolute top-5 end-[30px] text-lg translate-x-[-90%] bg-white"
			>
				<FaArrowLeftLong />
			</button>
			<div className="relative h-14 my-3">
				<div
					className={`block rounded-md p-2  text-sm absolute start-0 top-0 end-0 ${messageStyle}`}
				>
					{stopCountdown ? error : `کد تایید به شماره ${mobile} ارسال شد`}
					{stopCountdown &&
						!error.length &&
						"در صورت دریافت نکردن کد تایید از گزینه ارسال مجدد استفاده کنید"}
				</div>
			</div>
			<div className="text-xl font-medium text-center mb-5">
				کد تایید را وارد کنید.
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
					/>
				</div>

				<div>
					<CountDown {...{ stopCountdown, resendHandler, setStopCountdown }} />
				</div>

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
