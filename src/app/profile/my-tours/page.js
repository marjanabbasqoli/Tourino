"use client";

import MyTours from "@/components/templates/Profile/myTours";
import { useGetUserTours } from "@/services/queries";

function MyToursPage() {
	const { data, isPending } = useGetUserTours();

	if (isPending) return <div>Loading...</div>;

	return <MyTours tours={data?.data} />;
}

export default MyToursPage;
