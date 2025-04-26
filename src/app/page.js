import { serverFetch } from "@/services/http";

import ToursList from "@/components/templates/HomePage/ToursList/ToursList";
import Banner from "@/components/templates/HomePage/Banner/Banner";
import Features from "@/components/templates/HomePage/Features/Features";
import About from "@/components/templates/HomePage/About/About";
import Contact from "@/components/templates/HomePage/Contact/Contact";
import HomeSearchForm from "@/components/templates/HomePage/SearchForm/SearchForm";

export default async function Home({ searchParams }) {
	const data = await serverFetch("tour", searchParams, { cache: "no-store" });
	console.log({ data });

	return (
		<>
			<Banner />
			<HomeSearchForm />
			<ToursList toursData={data} />
			<Contact />
			<About />
			<Features />
		</>
	);
}
