import TourCard from "@/components/shared/tourCard/TourCard";
import { FaCircleInfo } from "react-icons/fa6";

function SearchedList({ toursData }) {
	if (!toursData?.length)
		return (
			<div className="container">
				<p className="bg-rose-50 text-rose-600 min-h-12 flex items-center rounded-lg py-2 px-4 font-medium">
					<FaCircleInfo className="me-2.5 text-lg" />
					توری با مشخصات موردنظر شما یافت نشد.
				</p>
			</div>
		);

	return (
		<div className="container pb-9">
			<div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{toursData.map((tour) => (
					<TourCard tour={tour} key={tour.id} />
				))}
			</div>
		</div>
	);
}

export default SearchedList;
