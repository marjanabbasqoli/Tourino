import ArrowDown from "@/assets/svgs/ArrowDown";

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
			<h3 className="font-medium text-lg lg:mb-7 max-lg:mb-4">اطلاعات شخصی</h3>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
				{personalInfo.map((input, index) => (
					<div key={index} className="relative">
						<input
							type="text"
							defaultValue={data[input.name]}
							{...register(input.name)}
							placeholder={input.placeholder}
							className={errors[input.name] && "inputError"}
						/>
						<p className="error">{errors[input.name]?.message}</p>
					</div>
				))}
				<div className="relative">
					<select {...register("gender")}>
						<option value="female">زن</option>
						<option value="male">مرد</option>
					</select>
					<ArrowDown />
				</div>
			</div>
		</div>
	);
}

export default PersonalInfo;
