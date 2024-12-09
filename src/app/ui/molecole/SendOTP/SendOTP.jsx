import { sendOtp } from "@/app/services/auth";

function SendOTP({ setStep, mobile, setMobile, setModal }) {
	const submitHandler = async (e) => {
		e.preventDefault();
		const { response, error } = await sendOtp(mobile);
		if (response) setStep(2);
		if (error) console.log(error.response.data.message);
	};

	const closeHandler = () => {
		setModal(false);
		setMobile("");
		return;
	};

	return (
		<div>
			<button onClick={closeHandler}>close</button>
			<div>ورود به تورینو</div>
			<form action="" onSubmit={submitHandler}>
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
