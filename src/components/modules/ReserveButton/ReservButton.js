"use client";

import { useAddToBasket } from "@/services/mutations";
import { useRouter } from "next/navigation";

function ReservButton({ id, style }) {
	const { mutate } = useAddToBasket();
	const router = useRouter();

	const clickHandler = () => {
		mutate(id, {
			onSuccess: (data) => {
				// console.log(data.data.message);
				router.push("/checkout");
			},
			onError: () => {
				console.log("لظفا وارد سایت شوید");
			},
		});
	};

	return (
		<button onClick={clickHandler} className={style}>
			رزرو و خرید
		</button>
	);
}

export default ReservButton;
