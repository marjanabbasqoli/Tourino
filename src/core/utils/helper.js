import moment from "moment/moment";

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

const DateToIso = (date) => new Date(date).toISOString();

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

export {
	flattenObject,
	DateToIso,
	displayMonth,
	displayVehicle,
	displayDuration,
};
