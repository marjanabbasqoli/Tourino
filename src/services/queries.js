import api from "@/core/configs/api";
import { useQuery } from "@tanstack/react-query";


const useGetUserData = () => {
	const queryFn = () => api.get("user/profile");
	const queryKey = ["user-data"];

	return useQuery({ queryKey, queryFn });
};

export { useGetUserData };
