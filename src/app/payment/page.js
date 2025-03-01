"use client";

import useQuery from "@/core/hooks/query";
import Link from "next/link";
import { FaCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

function PaymentPage() {
	const { getQuery } = useQuery();

	const status = getQuery("status");

	if (status === "success")
		return (
			<div className="container grow flex items-center justify-center py-9">
				<div className="text-center">
					<FaCircleCheck className="text-6xl text-primary mx-auto mb-5" />
					<p className="text-2xl mb-5">پرداخت شما با موفقیت انجام شد</p>
					<Link href="/profile/my-tours" className="theme-button block py-3">
						برو به پروفایل
					</Link>
				</div>
			</div>
		);

	return (
		<div className="container grow flex items-center justify-center py-9">
			<div className="text-center">
				<FaRegCircleXmark className="text-6xl text-rose-600 mx-auto mb-5" />
				<p className="text-2xl mb-5">پرداخت انجام نشد</p>
				<Link
					href="/"
					className="theme-button block py-3 !bg-rose-50 !text-rose-600 !px-3"
				>
					بازگشت به صفحه اصلی
				</Link>
			</div>
		</div>
	);
}

export default PaymentPage;
