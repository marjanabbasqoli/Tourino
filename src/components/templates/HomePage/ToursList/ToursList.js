import TourCard from "@/components/shared/tourCard/TourCard";

function ToursList({ toursData }) {
	// const data = toursData.slice(0, 4);

	return (
		<div className="container">
			<div className="text-2xl md:text-4xl font-bold mb-5 max-[500px]:text-center">
				جدیدترین تورها
			</div>
			<div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{toursData.map((tour) => (
					<TourCard tour={tour} key={tour.id} />
				))}
			</div>
		</div>
	);
}

export default ToursList;
