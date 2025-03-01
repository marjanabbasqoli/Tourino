"use client";

import MyTransactions from "@/components/templates/Profile/myTransactions";
import { useGetUserTransactions } from "@/services/queries";

function Transactions() {
	const { data, isPending } = useGetUserTransactions();
	if (isPending) return <div>...loading</div>;
	return <MyTransactions data={data?.data} />;
}

export default Transactions;
