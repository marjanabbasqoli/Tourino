function ToursList({ toursData }) {
	return (
		<div>
			{toursData.map((tour) => (
				<h1 key={tour.id}>{tour.title}</h1>
			))}
		</div>
	);
}

export default ToursList;
