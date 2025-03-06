import moment from "jalali-moment";

const flattenObject = (obj, delimiter = ".", prefix = "") => {
	const flattObject = Object.keys(obj).reduce((acc, k) => {
		const pre = prefix.length ? `${prefix}${delimiter}` : "";
		if (
			typeof obj[k] === "object" &&
			obj[k] !== null &&
			Object.keys(obj[k]).length > 0
		)
			Object.assign(acc, flattenObject(obj[k], delimiter, k));
		else acc[k] = obj[k];
		return acc;
	}, {});

	return flattObject;
};

const p2e = (s) =>
	s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const DateToIso = (date) => new Date(date).toISOString();

const convertToEnDate = (date) =>
	moment
		.from(`${date?.year}/${date?.month}/${date?.day}`, "fa", "YYYY-MM-DD")
		.format("YYYY-MM-DD") + "T00:00:00.000Z";

const convertToFaDate = (date) =>
	moment
		.from(`${date?.year}/${date?.month}/${date?.day}`, "en", "YYYY/MM/DD")
		.format("YYYY/MM/DD");

const displayMonth = (month) => {
	const momentMonth = new Intl.DateTimeFormat("en-US-u-ca-persian", {
		month: "short",
	}).format(new Date(month));

	const englishMonths = [
		"Farvardin",
		"Ordibehesht",
		"Khordad",
		"Tir",
		"Mordad",
		"Shahrivar",
		"Mehr",
		"Aban",
		"Azar",
		"Dey",
		"Bahman",
		"Esfand",
	];

	const persianMonths = [
		"فروردین",
		"اردیبهشت",
		"خرداد",
		"تیر",
		"مرداد",
		"شهریور",
		"مهر",
		"آبان",
		"آذر",
		"دی",
		"بهمن",
		"اسفند",
	];

	const index = englishMonths.findIndex((m) => momentMonth === m);

	return persianMonths[index];
};

const displayDuration = (start, end) =>
	moment.duration(moment(end).diff(moment(start))).asDays();

const displayVehicle = (vehicle) => {
	const englishVehicle = ["Airplane", "SUV", "Bus", "Van"];
	const persianVehicle = ["هواپیما", "ماشین", "اتوبوس", "ون"];

	const index = englishVehicle.findIndex((v) => v === vehicle);

	return persianVehicle[index];
};

const displayPerisanDate = (date) => {
	const weekday = new Date(date).toLocaleString("fa-IR", {
		weekday: "long",
	});

	const day = new Date(date).toLocaleString("fa-IR", {
		day: "2-digit",
	});

	const month = new Date(date).toLocaleString("fa-IR", {
		month: "long",
	});

	const year = new Date(date).toLocaleString("fa-IR", {
		year: "numeric",
	});

	return `${weekday} ${day} ${month} ${year}`;
};

const getTourDuration = (d1, d2) => {
	const date1 = new Date(d1);
	const date2 = new Date(d2);
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

export {
	flattenObject,
	DateToIso,
	displayMonth,
	displayVehicle,
	displayDuration,
	displayPerisanDate,
	getTourDuration,
	convertToEnDate,
	convertToFaDate,
	p2e,
};
