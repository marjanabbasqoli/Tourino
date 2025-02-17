const personalInfo = [
	{
		name: "firstName",
		placeholder: "نام",
	},
	{
		name: "lastName",
		placeholder: "نام خانوادگی",
	},
	{
		name: "nationalCode",
		placeholder: "کدملی",
	},
	{
		name: "birthDate",
		placeholder: "تاریخ تولد",
	},
];

function PersonalInfo({ data, form: { register, errors } }) {
	return (
		<div>
			<h3 className="font-medium text-lg mb-5">اطلاعات شخصی</h3>
			<div className="grid grid-cols-3 gap-7">
				{personalInfo.map((input, index) => (
					<div key={index}>
						<input
							type="text"
							defaultValue={data[input.name]}
							{...register(input.name)}
							placeholder={input.placeholder}
						/>
						<p>{errors[input.name]?.message}</p>
					</div>
				))}
				<div>
					<select {...register("gender")}>
						<option value="female">زن</option>
						<option value="male">مرد</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default PersonalInfo;
