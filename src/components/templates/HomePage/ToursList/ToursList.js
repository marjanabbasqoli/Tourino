import Link from "next/link";

function ToursList({ toursData }) {
	return (
		<div>
			{toursData.map((tour) => (
				<Link href={`tours/${tour.id}`} key={tour.id}>
					{tour.title}
				</Link>
			))}
		</div>
	);
}

export default ToursList;
