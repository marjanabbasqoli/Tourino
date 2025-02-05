import { useEffect, useRef, useState } from "react";

import { useSendOtp } from "@/services/mutations";

const validPhoneRegex = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

function SendOTP({ setStep, mobile, setMobile, isOpen }) {
	const [error, setError] = useState("");
	const input = useRef(null);

	useEffect(() => {
		setError("");
		isOpen &&
			setTimeout(() => {
				input.current.focus();
			}, 100);
	}, [isOpen]);

	const { isPending, mutate } = useSendOtp();
	
	const submitHandler = (e) => {
		e.preventDefault();

		if (!mobile.length) {
			setError("لطفا شماره موبایل را وارد کنید");
			return;
		}

		if (!mobile.match(validPhoneRegex)) {
			setError("لطفا شماره موبایل معتبر وارد کنید");
			return;
		}

		if (isPending) return;

		setError("");

		mutate(
			{ mobile },
			{
				onSuccess: () => {
					setStep(2);
				},
				onError: (error) => {
					console.log(error);
				},
			}
		);
	};

	return (
		<div>
			<div className="text-3xl text-center font-bold mb-9">ورود به تورینو</div>
			<form onSubmit={submitHandler}>
				<div className="relative">
					<label className=" block text-stone-500 mb-2.5">
						شماره موبایل خود را وارد کنید
					</label>
					<input
						type="text"
						placeholder="0912***4253"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						className="w-full border border-gray rounded-md px-2 h-[54px] outline-none mb-10"
						dir="ltr"
						ref={input}
						autoFocus
					/>

					<div className="absolute bottom-3 start-0 text-sm text-red-600">
						{error}
					</div>
				</div>

				<button
					type="submit"
					className="bg-primary text-white w-full h-[54px] rounded-md text-lg font-medium"
				>
					ارسال کد تایید
				</button>
			</form>
		</div>
	);
}

export default SendOTP;
