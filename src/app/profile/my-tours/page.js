"use client";

import { useGetUserTours } from "@/services/queries";

function MyTours() {
	const { data } = useGetUserTours();

	return (
		<div>
			{data?.data.map((tour) => (
				<div key={tour.id}>{tour.title}</div>
			))}
		</div>
	);
}

export default MyTours;
