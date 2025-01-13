import api from "@/core/configs/api";
import { useQuery } from "@tanstack/react-query";

const useGetUserData = () => {
	const queryFn = () => api.get("user/profile");
	const queryKey = ["user-data"];

	return useQuery({ queryKey, queryFn });
};

const useGetBasket = () => {
	const queryFn = () => api.get("basket");
	const queryKey = ["get-basket"];

	return useQuery({ queryKey, queryFn });
};

const useGetUserTours = () => {
	const queryFn = () => api.get("user/tours");
	const queryKey = ["get-user-tours"];

	return useQuery({ queryKey, queryFn });
};

const useGetUserTransactions = () => {
	const queryFn = () => api.get("user/transactions");
	const queryKey = ["get-user-transactions"];

	return useQuery({ queryKey, queryFn });
};

export {
	useGetUserData,
	useGetBasket,
	useGetUserTours,
	useGetUserTransactions,
};
