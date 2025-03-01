import ArrowDown from "@/assets/svgs/ArrowDown";
import styles from "./Form.module.scss";

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

function AddPassenger({ register, errors, data }) {
	return (
		<div className={styles.informationSection}>
			{personalInfo.map((input, index) => (
				<div key={index} className="relative mb-3">
					<input
						type="text"
						defaultValue={data.data[input.name]}
						{...register(input.name)}
						placeholder={input.placeholder}
						className={errors[input.name] && "inputError"}
					/>
					<p className="theme-error">{errors[input.name]?.message}</p>
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
	);
}

export default AddPassenger;
