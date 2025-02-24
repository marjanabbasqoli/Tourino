import TourDetails from "@/components/templates/TourDetails";
import { serverFetch } from "@/services/http";
import { notFound } from "next/navigation";

async function TourDetailsPage({ params }) {
	const data = await serverFetch(`tour/${params.tourId}`, null, {
		cache: "no-store",
	});

	if (data.message === "تور درخواستی وجود ندارد!") {
		notFound();
	}

	return <TourDetails tour={data} id={params.tourId} />;
}

export default TourDetailsPage;
