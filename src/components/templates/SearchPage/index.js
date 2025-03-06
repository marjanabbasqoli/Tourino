import SearchForm from "@/components/shared/searchForm/SearchForm";
import ToursList from "../HomePage/ToursList/ToursList";

function SearchPage() {
	return (
		<div className="container">
			<SearchForm />
			{/* <ToursList toursData={{}} /> */}
		</div>
	);
}

export default SearchPage;
