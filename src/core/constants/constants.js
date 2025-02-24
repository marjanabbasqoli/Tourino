import { FaHouse, FaPhone, FaPlaneUp, FaVolumeLow } from "react-icons/fa6";

const origin = [
	{
		value: "1",
		label: "تهران",
	},
	{
		value: "2",
		label: "سنندج",
	},
	{
		value: "4",
		label: "اصفهان",
	},
];

const destination = [
	{
		value: "2",
		label: "سنندج",
	},
	{
		value: "3",
		label: "مادرید",
	},
	{
		value: "5",
		label: "تور سلیمانیه",
	},
	{
		value: "6",
		label: "هولیر",
	},
	{
		value: "7",
		label: "مازندران",
	},
	{
		value: "8",
		label: "آفرود",
	},
	{
		value: "9",
		label: "ایتالیا",
	},
];

const transactionsType = [
	{
		type: "Purchase",
		title: "ثبت نام در تور گردشگری",
	},
];

const mainMenu = [
	{
		title: "صفحه اصلی",
		link: "/",
		icon: <FaHouse />,
	},
	{
		title: "خدمات گردشگری",
		link: "/tour-services",
		icon: <FaPlaneUp />,
	},
	{
		title: "درباره ما",
		link: "/about",
		icon: <FaVolumeLow />,
	},
	{
		title: "تماس با ما",
		link: "/contact",
		icon: <FaPhone />,
	},
];

const footerMenu = {
	title: "تورینو",
	items: [
		{
			title: "درباره ما",
			link: "/",
		},
		{
			title: "تماس با ما",
			link: "/",
		},
		{
			title: "چرا تورینو",
			link: "/",
		},
		{
			title: "بیمه مسافرتی",
			link: "/",
		},
	],
};

const servicesMenu = {
	title: "خدمات مشتریان",
	items: [
		{
			title: "پشتیبانی آنلاین",
			link: "/",
		},
		{
			title: "راهنمای خرید",
			link: "/",
		},
		{
			title: "راهنمای استرداد",
			link: "/",
		},
		{
			title: "پرسش و پاسخ",
			link: "/",
		},
	],
};

export {
	origin,
	destination,
	mainMenu,
	footerMenu,
	servicesMenu,
	transactionsType,
};
