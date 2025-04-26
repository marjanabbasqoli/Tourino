"use client";

import CheckoutPage from "@/components/templates/Checkout";
import { useGetBasket } from "@/services/queries";

function Checkout() {
	const { data, isPending } = useGetBasket();
	if (isPending) return <div>Loading...</div>;

	return <CheckoutPage data={data.data} />;
}

export default Checkout;
