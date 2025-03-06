"use client";

import { useGetTours } from "@/services/queries";
import ToursList from "@/components/templates/HomePage/ToursList/ToursList";
import SearchPage from "@/components/templates/SearchPage";
import { useEffect } from "react";

function Search({ searchParams }) {
	const { data, isPending, refetch } = useGetTours(searchParams);

	useEffect(() => {
		refetch();
	}, [searchParams]);

	if (isPending) <div>loading...</div>;

	return (
		<>
			<SearchPage />
			<ToursList toursData={data?.data} />
		</>
	);
}

export default Search;
