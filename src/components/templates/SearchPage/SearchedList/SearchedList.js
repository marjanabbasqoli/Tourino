import TourCard from "@/components/shared/tourCard/TourCard";

function SearchedList({ toursData }) {
	if (!toursData?.length)
		return (
			<div className="container">
				<p>توری یافت نشد</p>
			</div>
		);

	return (
		<div className="container">
			<div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{toursData.map((tour) => (
					<TourCard tour={tour} key={tour.id} />
				))}
			</div>
		</div>
	);
}

export default SearchedList;
