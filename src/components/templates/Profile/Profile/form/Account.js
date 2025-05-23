const accountInfo = [
	{
		name: "shaba_code",
		placeholder: "شماره شبا",
		optional: true,
	},
	{
		name: "debitCard_code",
		placeholder: "شماره کارت",
	},
	{
		name: "accountIdentifier",
		placeholder: "شماره حساب",
	},
];

function AccountInfo({ data, form: { register, errors } }) {
	return (
		<div>
			<h3 className="font-medium text-lg lg:mb-7 max-lg:mb-4">
				اطلاعات حساب بانکی
			</h3>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
				{accountInfo.map((input, index) => (
					<div key={index} className="relative">
						<input
							type="text"
							defaultValue={data?.payment?.[input.name]}
							{...register(input.name)}
							placeholder={input.placeholder}
							className={errors[input.name] && "inputError"}
						/>

						<p className="error">{errors[input.name]?.message}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default AccountInfo;
