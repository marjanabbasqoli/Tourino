import TourCard from "@/components/shared/tourCard/TourCard";
import Link from "next/link";

function ToursList({ toursData }) {
	// toursData = toursData?.slice(0, 8);
	console.log({ toursData });

	if (!toursData?.length)
		return (
			<div className="container">
				<p>توری یافت نشد</p>
			</div>
		);

	return (
		<div className="container">
			<div className="text-2xl md:text-4xl font-bold mb-7 max-[500px]:text-center">
				جدیدترین تورها
			</div>
			<div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{toursData.map((tour) => (
					<TourCard tour={tour} key={tour.id} />
				))}
			</div>
			<Link
				href="/tours"
				className="bg-primary text-white p-2 w-40 rounded-lg ms-auto max-sm:me-auto block text-center text-lg mt-6"
			>
				مشاهده همه
			</Link>
		</div>
	);
}

export default ToursList;
