"use client";
import { useGetUserTransactions } from "@/services/queries";

function Transactions() {
	const { data } = useGetUserTransactions();
	return (
		<div>
			{data?.data.map((t) => (
				<div key={t.id}>{t.amount}</div>
			))}
		</div>
	);
}

export default Transactions;
