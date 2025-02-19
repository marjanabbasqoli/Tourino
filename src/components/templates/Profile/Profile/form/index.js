import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useEditProfile } from "@/services/mutations";
import formValidation from "@/core/utils/formValidation";

import PersonalInfo from "./PersonalInfo";
import AccountInfo from "./Account";

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
					<h3 className="font-bold text-lg lg:mb-7 max-lg:mb-5">
						اطلاعات حساب کاربری
					</h3>
					<div className="grid sm:grid-cols-2 lg:gap-7 max-lg:gap-4">
						<div className="flex items-center">
							<label className="min-w-28 text-grayDark">شماره موبایل</label>
							<div className="font-medium">{mobile}</div>
						</div>
						<div className="relative">
							<input
								type="text"
								defaultValue={data.email}
								{...register("email")}
								placeholder="ایمیل"
								className={errors.email && "inputError"}
							/>
							<p className="error">{errors.email?.message}</p>
						</div>
					</div>
				</div>

				<div className="information-section">
					<PersonalInfo data={data} form={{ register, errors }} />
				</div>

				<div className="information-section">
					<AccountInfo data={data} form={{ register, errors }} />
				</div>

				<div className="flex justify-end *:w-36 *:h-11 *:rounded-lg *:font-medium *:transition-colors *:duration-300">
					<button
						type="submit"
						className="bg-primary text-white hover:bg-primaryDark"
					>
						تایید
					</button>
					{data.nationalCode && (
						<button
							type="button"
							onClick={() => setShowForm(false)}
							className="border-2 border-primary text-primary ms-2.5 hover:bg-primary hover:text-white"
						>
							انصراف
						</button>
					)}
				</div>
			</form>
		</>
	);
}

export default ProfileForm;
