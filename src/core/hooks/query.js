import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

const useQuery = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(String(searchParams));

	const addQuery = (key, value) => {
		value = String(value);
		params.set(key, value);
		router.replace(`?${params}`);
	};

	const removeQuery = (key) => {
		params.delete(key);
		router.replace(`?${params}`);
	};

	const getQuery = (key) => {
		return params.get(key);
	};

	const getAllQueries = () => queryString.parse(location.search);

	return { addQuery, removeQuery, getQuery, getAllQueries };
};

export default useQuery;
