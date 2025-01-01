import { serverFetch } from "@/services/http";

import SearchForm from "@/components/templates/HomePage/SearchForm/SearchForm";
import ToursList from "@/components/templates/HomePage/ToursList/ToursList";

export default async function Home({ searchParams }) {
	const data = await serverFetch("tour", searchParams, { cache: "no-store" });

	return (
		<>
			<SearchForm />
			<ToursList toursData={data} />
		</>
	);
}
