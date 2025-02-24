import MyTourCard from "./MyTourCard";

function MyTours({ tours }) {
	if (!tours?.length)
		return (
			<div className="bg-orange-100 text-orange-600 rounded-lg p-4">
				توری خریداری نشده است.
			</div>
		);

	return (
		<div className="border border-grayLight rounded-lg p-5">
			{tours.map((tour) => (
				<MyTourCard key={tour.id} {...tour} />
			))}
		</div>
	);
}

export default MyTours;
