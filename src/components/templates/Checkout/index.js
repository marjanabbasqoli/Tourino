import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import formValidation from "@/core/utils/formValidation";
import { getTourDuration } from "@/core/utils/helper";
import { useCheckout } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/services/queries";
import AddPassenger from "./Form/Form";

function CheckoutPage({ data }) {
	const { title, price, startDate, endDate } = data;
	const days = getTourDuration(startDate, endDate);

	const { data: userData } = useGetUserData();
	const inputs = [
		"firstName",
		"lastName",
		"gender",
		"nationalCode",
		"birthDate",
	];
	const schema = z.object(formValidation(inputs));
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema), reValidateMode: "onSubmit" });

	const { mutate } = useCheckout();
	const router = useRouter();

	const submitHandler = (form) => {
		const newForm = { ...form, fullName: `${form.firstName} ${form.lastName}` };

		mutate(newForm, {
			onSuccess: () => {
				router.push("/payment?status=success");
			},
		});
	};

	return (
		<div className="md:bg-[#F3F3F3] grow max-lg:py-6 lg:py-9">
			<div className="container">
				<form
					className="grid md:grid-cols-3 lg:grid-cols-4 gap-4"
					onSubmit={handleSubmit(submitHandler)}
				>
					<div className="md:col-span-2 lg:col-span-3">
						<AddPassenger register={register} errors={errors} data={userData} />
					</div>
					<div className="theme-white-box py-3">
						<div className="flex justify-between items-center border-b-2 border-grayLight px-3 pb-4">
							<h2 className="text-2xl font-bold">{title}</h2>
							<div className="text-grayDark">
								{days + 1} روز و {days} شب
							</div>
						</div>
						<div className="px-3 pt-4">
							<div className="flex justify-between items-center mb-5">
								<span>قیمت نهایی</span>
								<span>
									<span className="text-2xl lg:text-3xl text-cyan-500 font-medium">
										{price}
									</span>
									<span className="text-sm ms-1">تومان</span>
								</span>
							</div>

							<button type="submit" className="theme-button w-full">
								ثبت و خرید نهایی
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CheckoutPage;
