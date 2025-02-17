import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useEditProfile } from "@/services/mutations";
import formValidation from "@/core/utils/formValidation";

import PersonalInfo from "./Personal";
import AccountInfo from "./AccountInfo";

function ProfileForm({ data, setShowForm }) {
	const { mobile } = data;

	const inputs = [
		"email",
		"firstName",
		"lastName",
		"gender",
		"nationalCode",
		"birthDate",
		"shaba_code",
		"debitCard_code",
		"accountIdentifier",
	];

	const schema = z.object(formValidation(inputs));

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema), reValidateMode: "onSubmit" });

	const { mutate, isPending } = useEditProfile();

	const submitHandler = (form) => {
		const { email, firstName, lastName, nationalCode, birthDate, gender } = form;
		const newForm = {
			email,
			firstName,
			lastName,
			nationalCode,
			birthDate,
			gender,
			payment: {
				shaba_code: form.shaba_code,
				debitCard_code: form.debitCard_code,
				accountIdentifier: form.accountIdentifier,
			},
		};
		mutate(newForm);
		if (!isPending) setShowForm(false);
	};

	if (isPending) return <div>...loading</div>;

	return (
		<>
			<form onSubmit={handleSubmit(submitHandler)}>
				<div className="information-section">
					<h3 className="font-medium text-lg mb-5">اطلاعات حساب کاربری</h3>
					<div className="grid grid-cols-2 gap-7">
						<div className="flex items-center">
							<label>شماره موبایل</label>
							<div>{mobile}</div>
						</div>
						<div>
							<input
								type="text"
								defaultValue={data.email}
								{...register("email")}
								placeholder="ایمیل"
							/>
							<p>{errors.email?.message}</p>
						</div>
					</div>
				</div>

				<div className="information-section">
					<PersonalInfo data={data} form={{ register, errors }} />
				</div>

				<div className="information-section">
					<AccountInfo data={data} form={{ register, errors }} />
				</div>

				<div>
					<button type="submit">تایید</button>
					{data.nationalCode && (
						<button type="button" onClick={() => setShowForm(false)}>
							انصراف
						</button>
					)}
				</div>
			</form>
		</>
	);
}

export default ProfileForm;
