"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm, Controller } from "react-hook-form";
import queryString from "query-string";
import Select from "react-select";
// import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

import styles from "./SearchForm.module.scss";
import "./react-select-styles.scss";
import useQuery from "@/core/hooks/query";
import { convertToEnDate, DateToIso, flattenObject } from "@/core/utils/helper";
import { destination, origin } from "@/core/constants/constants";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import SearchForm from "@/components/shared/searchForm/SearchForm";
// import DatePicker, {
// 	utils,
// } from "@amir04lm26/react-modern-calendar-date-picker";
// import SearchForm from "@/components/shared/searchForm/SearchForm";

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
