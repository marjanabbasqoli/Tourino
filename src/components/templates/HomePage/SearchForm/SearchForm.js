import SearchForm from "@/components/shared/searchForm/SearchForm";


function HomeSearchForm() {
	return (
		<div className="container pt-4 pb-12 md:pb-20 mx-auto">
			<h2 className="font-semibold text-lg sm:text-[28px]/[43px] text-center mb-5 sm:mb-7 text-[#595959]">
				<span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
				داخلی و خارجی
			</h2>
			<SearchForm />
		</div>
	);
}

export default HomeSearchForm;
