"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
// import DatePicker, {
// 	utils,
// } from "@amir04lm26/react-modern-calendar-date-picker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { destination, origin } from "@/core/constants/constants";
import useQuery from "@/core/hooks/query";
import {
	convertToEnDate,
	DateToIso,
	flattenObject,
	p2e,
} from "@/core/utils/helper";
import DatePicker, { utils } from "react-modern-calendar-datepicker";

function SearchForm() {
	const router = useRouter();
	const { getQuery, getAllQueries } = useQuery();
	const [error, setError] = useState("");

	const originId = getQuery("originId");
	const destinationId = getQuery("destinationId");

	//set initial datepicker range
	const [selectedDayRange, setSelectedDayRange] = useState({
		from: null,
		to: null,
	});

	//set default value to form
	const setDefaultRange = (from, to) => {
		let defaultRange;

		const convertToDatePickerFormat = (d) => {
			const splittedDate = new Date(d)
				.toLocaleDateString("fa-IR", {
					day: "2-digit",
					year: "numeric",
					month: "2-digit",
				})
				.split("/");
			const convertedDate = {
				year: +p2e(splittedDate[0]),
				month: +p2e(splittedDate[1]),
				day: +p2e(splittedDate[2]),
			};
			return convertedDate;
		};

		if (from && to) {
			const defaultFrom = convertToDatePickerFormat(from);
			const defaultTo = convertToDatePickerFormat(to);

			defaultRange = {
				from: defaultFrom,
				to: defaultTo,
			};

			reset({
				date: { startDate: from, endDate: to },
				originId,
				destinationId,
			});

			return defaultRange;
		}

		// defaultRange = { from: null, to: null };
		// return defaultRange;
	};

	//react hook form
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		const { startDate, endDate } = getAllQueries();
		if (originId) setSelectedDayRange(setDefaultRange(startDate, endDate));
	}, []);

	const submitHandler = (data) => {
		// if (!data?.date?.startDate && !data?.date?.endDate) {
		// 	setError("لطفا تاریخ موردنظر خود را انتخاب کنید");
		// 	return;
		// }
		const query = queryString.stringify(flattenObject(data));
		router.push(`/search?${query}`);
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className="grid grid-cols-4 gap-4 border border-[rgba(0,0,0,0.15)] rounded-[20px] p-2.5"
		>
			<Controller
				control={control}
				name="originId"
				rules={{ required: "لطفا مبدا را انتخاب کنید" }}
				render={({ field: { onChange } }) => (
					<div className="relative">
						<Select
							onChange={(e) => onChange(e.value)}
							options={origin}
							placeholder={
								<span className="flex items-center text-xl text-[#2C2C2C]">
									<FaLocationDot className="me-2" /> مبدا
								</span>
							}
							instanceId={origin}
							className="react-select-container origin-select"
							classNamePrefix="react-select"
							defaultValue={origin.find((o) => o.value === originId)}
						/>

						{errors.originId && (
							<p className="text-red-700 absolute bottom-0 start-0">
								{errors.originId.message}
							</p>
						)}
					</div>
				)}
			/>
			<Controller
				control={control}
				name="destinationId"
				rules={{ required: "لطفا مقصد را انتخاب کنید" }}
				render={({ field: { onChange } }) => (
					<div className="relative">
						<Select
							onChange={(e) => onChange(e.value)}
							options={destination}
							placeholder={
								<span className="flex items-center  text-xl text-[#2C2C2C]">
									<FaMapLocationDot className="me-2" />
									مقصد
								</span>
							}
							instanceId={destination}
							className="react-select-container"
							classNamePrefix="react-select"
							defaultValue={destination.find((o) => o.value === destinationId)}
						/>
						{errors.destinationId && (
							<p className="text-red-700 absolute bottom-0 start-0">
								{errors.destinationId.message}
							</p>
						)}
					</div>
				)}
			/>
			{/* <Controller
					control={control}
					name="date"
					render={({ field: { onChange } }) => (
						// <DatePicker
						// 	onChange={(e) =>
						// 		onChange({
						// 			startDate: DateToIso(e.from),
						// 			endDate: DateToIso(e.to),
						// 		})
						// 	}
						// 	range
						// 	inputClass={styles.dateSelection}
						// 	className="basis-1/4"
						// 	accentColor="#28A745"
						// />
						
					)} */}
			{
				<Controller
					control={control}
					name="date"
					rules={{ required: "لطفا تاریخ را انتخاب کنید" }}
					render={({ field: { onChange } }) => (
						<DatePicker
							value={selectedDayRange}
							onChange={(e) => {
								setSelectedDayRange(e);
								onChange({
									startDate: DateToIso(convertToEnDate(e?.from)),
									endDate: DateToIso(convertToEnDate(e?.to)),
								});
							}}
							locale="fa"
							inputPlaceholder="تاریخ"
							shouldHighlightWeekends
							minimumDate={utils("fa").getToday()}
						/>
					)}
				/>
			}

			{errors.date && (
				<p className="text-red-700 absolute bottom-0 start-0">
					{errors.date.message}
				</p>
			)}

			{/* <p>{error}</p> */}

			<button type="submit" className="basis-1/4">
				جستجو
			</button>
		</form>
	);
}

export default SearchForm;
