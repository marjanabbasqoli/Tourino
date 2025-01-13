"use client";

import { useCheckout } from "@/services/mutations";
import { useGetBasket } from "@/services/queries";
import { useRouter } from "next/navigation";

function Checkout() {
	const { data } = useGetBasket();

	const { mutate } = useCheckout();
	const router = useRouter();

	const checkoutHandler = () => {
		const data = {
			nationalCode: "3720878654",
			fullName: "John Doe",
			gender: "male",
			birthDate: "2022-10-10",
		};

		mutate(data, {
			onSuccess: (data) => {
				// console.log(data);
				router.push("/payment?status=success");
			},
		});
	};

	return (
		<div>
			<p>{data?.data?.title}</p>
			<p>{data?.data?.price}</p>
			<button onClick={checkoutHandler}>ثبت و خرید نهایی</button>
		</div>
	);
}

export default Checkout;
