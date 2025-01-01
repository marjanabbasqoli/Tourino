"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { DatePicker } from "zaman";
import { useForm, Controller } from "react-hook-form";
import queryString from "query-string";

import styles from "./SearchForm.module.scss";
import useQuery from "@/core/hooks/query";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import { destination, origin } from "@/core/constants/constants";

function SearchForm() {
	const router = useRouter();
	const { control, register, handleSubmit, reset } = useForm();
	const { getQuery } = useQuery();

	useEffect(() => {
		const originId = getQuery("originId");
		const destinationId = getQuery("destinationId");
		if (originId && destinationId) reset({ originId, destinationId });
	}, []);

	const submitHandler = (form) => {
		const query = queryString.stringify(flattenObject(form));
		router.push(`/?${query}`);
	};

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<select {...register("originId")}>
				{origin.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>

			<select {...register("destinationId")}>
				{destination.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>

			<Controller
				control={control}
				name="date"
				render={({ field: { onChange } }) => (
					<DatePicker
						onChange={(e) =>
							onChange({
								startDate: DateToIso(e.from),
								endDate: DateToIso(e.to),
							})
						}
						range
						inputClass={styles.dateSelection}
					/>
				)}
			/>

			<button type="submit">جستجو</button>
		</form>
	);
}

export default SearchForm;
