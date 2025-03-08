"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import "./SearchForm.scss";
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

const selectTheme = (theme) => ({
	...theme,
	colors: {
		...theme?.colors,
		primary: "var(--primary)",
		primary75: "var(--primary)",
		primary25: "rgba(40, 167, 69 , 15%)",
		primary50: "rgba(40, 167, 69 , 20%)",
	},
});

function SearchForm() {
	const router = useRouter();
	const { getQuery, getAllQueries } = useQuery();

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
		const query = queryString.stringify(flattenObject(data));
		router.push(`/search?${query}`);
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className="grid grid-cols-2 md:grid-cols-11 gap-2 md:border border-[rgba(0,0,0,0.15)] rounded-[20px] md:p-2.5 md:ps-4"
		>
			<Controller
				control={control}
				name="originId"
				rules={{ required: "لطفا مبدا را انتخاب کنید" }}
				render={({ field: { onChange } }) => (
					<div className="relative z-[101] md:col-span-3 max-md:border max-md:mb-1 border-grayLight rounded-xl">
						<Select
							onChange={(e) => onChange(e.value)}
							options={origin}
							placeholder={
								<span className="flex items-center text-base lg:text-xl text-[#2C2C2C]">
									مبدا
								</span>
							}
							instanceId={origin}
							className="react-select-container origin-select"
							classNamePrefix="react-select"
							defaultValue={origin.find((o) => o.value === originId)}
							theme={selectTheme}
						/>

						{errors.originId && (
							<p className="error-message select">{errors.originId.message}</p>
						)}
					</div>
				)}
			/>
			<Controller
				control={control}
				name="destinationId"
				rules={{ required: "لطفا مقصد را انتخاب کنید" }}
				render={({ field: { onChange } }) => (
					<div className="relative z-[101] md:col-span-3 max-md:mb-1 max-md:border border-grayLight rounded-xl">
						<Select
							onChange={(e) => onChange(e.value)}
							options={destination}
							placeholder={
								<span className="flex items-center text-base lg:text-xl text-[#2C2C2C]">
									مقصد
								</span>
							}
							instanceId={destination}
							className="react-select-container destination-select"
							classNamePrefix="react-select"
							defaultValue={destination.find((o) => o.value === destinationId)}
							theme={selectTheme}
						/>
						{errors.destinationId && (
							<p className="error-message select">{errors.destinationId.message}</p>
						)}
					</div>
				)}
			/>

			{
				<Controller
					control={control}
					name="date"
					rules={{ required: "لطفا تاریخ را انتخاب کنید" }}
					render={({ field: { onChange } }) => (
						<div className="relative col-span-2 md:col-span-3 max-md:mb-4 h-12 max-md:border border-grayLight rounded-xl">
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
								inputClassName="datepicker-input-class"
								wrapperClassName="theme-datepicker"
								calendarPopperPosition="bottom"
								colorPrimary="#28a745"
							/>

							{errors.date && <p className="error-message">{errors.date.message}</p>}
						</div>
					)}
				/>
			}

			<button
				type="submit"
				className="basis-1/4 theme-button !h-12 !rounded-2xl w-full md:!w-48 max-w-full mr-auto col-span-2 max-lg:text-xl"
			>
				جستجو
			</button>
		</form>
	);
}

export default SearchForm;
