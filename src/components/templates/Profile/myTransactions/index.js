import { transactionsType } from "@/core/constants/constants";

function MyTransactions({ data }) {
	const displayDate = (date) => {
		return (
			<div>
				<span>
					{new Date(date).toLocaleTimeString("fa-IR", {
						hour: "2-digit",
						minute: "2-digit",
					})}
				</span>
				<span> - </span>
				<span>
					{new Date(date).toLocaleString("fa-IR", {
						day: "2-digit",
						month: "2-digit",
						year: "numeric",
					})}
				</span>
			</div>
		);
	};

	const displayOrderNumber = (id) => id.split("-")[0];

	if (!data?.length)
		return (
			<div className="bg-orange-100 text-orange-600 rounded-lg p-4">
				تراکشنی ثبت نشده است.
			</div>
		);

	return (
		<div className="overflow-x-auto">
			<table className="max-sm:text-sm min-w-max w-full border border-grayLight rounded-lg border-separate border-spacing-0 overflow-hidden">
				<thead className="bg-gray">
					<tr className="*:text-start *:px-4 *:py-3">
						<th className="rounded-tr-lg">تاریخ و ساعت</th>
						<th>مبلغ(تومان)</th>
						<th>نوع تراکنش</th>
						<th className="rounded-tl-lg">شماره سفارش</th>
					</tr>
				</thead>
				<tbody>
					{data.map((t, index) => (
						<tr
							className="*:text-start *:px-4 *:py-3 *:even:bg-[#F3F3F3]"
							key={index}
						>
							<td>{displayDate(t.createdAt)}</td>
							<td>{t.amount}</td>
							<td>{transactionsType.find((item) => item.type === t.type)?.title}</td>
							<td dir="ltr" style={{ textAlign: "right" }}>
								#{displayOrderNumber(t.id)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default MyTransactions;
