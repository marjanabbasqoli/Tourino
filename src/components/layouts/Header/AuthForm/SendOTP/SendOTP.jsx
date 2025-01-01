import { useSendOtp } from "@/services/mutations";

function SendOTP({ setStep, mobile, setMobile }) {
	const { isPending, mutate } = useSendOtp();

	const submitHandler = (e) => {
		e.preventDefault();

		if (isPending) return;

		mutate(
			{ mobile },
			{
				onSuccess: (data) => {
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
			<div>ورود به تورینو</div>
			<form onSubmit={submitHandler}>
				<label htmlFor="">شماره موبایل خود را وارد کنید</label>
				<br />
				<input
					type="number"
					placeholder="0912***4253"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
				/>
				<br />
				<button type="submit">ارسال کد تایید</button>
			</form>
		</div>
	);
}

export default SendOTP;
