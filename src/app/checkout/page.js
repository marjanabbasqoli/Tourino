"use client";

import CheckoutPage from "@/components/templates/Checkout";
import { useCheckout } from "@/services/mutations";
import { useGetBasket } from "@/services/queries";
import { useRouter } from "next/navigation";

function Checkout() {
	const { data, isPending } = useGetBasket();
	if (isPending) return <div>Loading...</div>;

	return <CheckoutPage data={data.data} />;
}

export default Checkout;
