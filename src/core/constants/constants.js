import { FaHouse, FaPhone, FaPlaneUp, FaVolumeLow } from "react-icons/fa6";

const origin = [
	{
		id: "1",
		name: "تهران",
	},
	{
		id: "2",
		name: "سنندج",
	},
	{
		id: "4",
		name: "اصفهان",
	},
];

const destination = [
	{
		id: "2",
		name: "سنندج",
	},
	{
		id: "3",
		name: "مادرید",
	},
	{
		id: "5",
		name: "تور سلیمانیه",
	},
	{
		id: "6",
		name: "هولیر",
	},
	{
		id: "7",
		name: "مازندران",
	},
	{
		id: "8",
		name: "آفرود",
	},
	{
		id: "9",
		name: "ایتالیا",
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

export { origin, destination, mainMenu };
