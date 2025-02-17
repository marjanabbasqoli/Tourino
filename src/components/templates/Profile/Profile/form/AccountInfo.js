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
			<h3 className="font-medium text-lg mb-5">اطلاعات حساب بانکی</h3>
			<div className="grid grid-cols-3 gap-7">
				{accountInfo.map((input, index) => (
					<div key={index}>
						<input
							type="text"
							defaultValue={data?.payment?.[input.name]}
							{...register(input.name)}
							placeholder={input.placeholder}
						/>

						<p>{errors[input.name]?.message}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default AccountInfo;
