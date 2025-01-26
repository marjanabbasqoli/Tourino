"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { DatePicker } from "zaman";
import { useForm, Controller } from "react-hook-form";
import queryString from "query-string";
import Select from "react-select";

import styles from "./SearchForm.module.scss";
import "./react-select-styles.scss";
import useQuery from "@/core/hooks/query";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import { destination, origin } from "@/core/constants/constants";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";

function SearchForm() {
	const router = useRouter();

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { getQuery } = useQuery();

	const originId = getQuery("originId");
	const destinationId = getQuery("destinationId");

	useEffect(() => {
		if (originId && destinationId) reset({ originId, destinationId });
	}, []);

	const submitHandler = (form) => {
		const query = queryString.stringify(flattenObject(form));
		router.push(`/?${query}`);
	};

	return (
		<div className="container pt-4 mt-px">
			<h2 className="font-semibold text-[28px]/[43px] text-center mb-7 text-[#595959]">
				<span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
				داخلی و خارجی
			</h2>
			<form
				onSubmit={handleSubmit(submitHandler)}
				className="grid grid-cols-4 gap-4 border border-[rgba(0,0,0,0.15)] rounded-[20px] p-2.5"
			>
				<Controller
					control={control}
					name="originId"
					rules={{
						required: "لطفا مبدا را انتخاب کنید",
						// maxLength: { value: 5, message: "must be less than 5 (customizable)" },
					}}
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
								className="react-select-container"
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
					rules={{
						required: "لطفا مقصد را انتخاب کنید",
					}}
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
							className="basis-1/4"
							accentColor="#28A745"
						/>
					)}
				/>

				<button type="submit" className="basis-1/4">
					جستجو
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
