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
			<div className="text-3xl text-center font-bold mb-9">ورود به تورینو</div>
			<form onSubmit={submitHandler}>
				<label className=" block text-stone-500 mb-2.5">
					شماره موبایل خود را وارد کنید
				</label>

				<input
					type="number"
					placeholder="0912***4253"
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
					className="w-full border border-gray rounded-md px-2 h-[54px] outline-none mb-10"
					dir="ltr"
				/>

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
