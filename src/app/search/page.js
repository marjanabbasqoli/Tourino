"use client";

import { useEffect } from "react";
import { useGetTours } from "@/services/queries";
import SearchPage from "@/components/templates/SearchPage";
import SearchedList from "@/components/templates/SearchPage/SearchedList/SearchedList";

function Search({ searchParams }) {
	const { data, isPending, refetch } = useGetTours(searchParams);

	useEffect(() => {
		refetch();
	}, [searchParams]);

	if (isPending) <div>loading...</div>;

	return (
		<>
			<SearchPage />
			<SearchedList toursData={data?.data} />
		</>
	);
}

export default Search;
