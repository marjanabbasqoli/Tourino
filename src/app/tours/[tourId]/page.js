import ReservButton from "@/components/modules/ReserveButton/ReservButton";
import { serverFetch } from "@/services/http";
import { notFound } from "next/navigation";
import React from "react";

async function TourDetails({ params }) {
	
	const data = await serverFetch(`tour/${params.tourId}`, null, {
		cache: "no-store",
	});

	if (data.message === "تور درخواستی وجود ندارد!") {
		notFound();
	}

	return (
		<div>
			{data?.title}
			<ReservButton id={params.id} />
		</div>
	);
}

export default TourDetails;
