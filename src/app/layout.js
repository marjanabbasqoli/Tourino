import localFont from "next/font/local";

import TanstackProvider from "@/components/partilas/providers/TanstackProvider";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";

import "./globals.css";

// const geistSans = localFont({
// 	src: "./fonts/GeistVF.woff",
// 	variable: "--font-geist-sans",
// 	weight: "100 900",
// });
// const geistMono = localFont({
// 	src: "./fonts/GeistMonoVF.woff",
// 	variable: "--font-geist-mono",
// 	weight: "100 900",
// });
const myfont = localFont({
	src: [
		{
			path: "../assets/fonts/FaFont/YekanBakh-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Regular.ttf",
			weight: "400",
			style: "normal",
		},

		{
			path: "../assets/fonts/FaFont/YekanBakh-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Medium.ttf",
			weight: "500",
			style: "normal",
		},

		{
			path: "../assets/fonts/FaFont/YekanBakh-Bold.woff",
			weight: "bold",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Bold.woff2",
			weight: "bold",
			style: "normal",
		},
		{
			path: "../assets/fonts/FaFont/YekanBakh-Bold.ttf",
			weight: "bold",
			style: "normal",
		},
	],
	variable: "--font-FaFont",
	weight: "400 500 700",
});

export const metadata = {
	title: "تورینو",
	description: "تورینو برگزار کننده بهترین تور های داخلی و خارجی",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<body
				className={`${myfont.variable} selection:bg-primary selection:text-white text-base min-h-screen flex flex-col`}
			>
				<TanstackProvider>
					<Header />
					<div className="grow flex flex-col">{children}</div>
					<Footer />
				</TanstackProvider>
			</body>
		</html>
	);
}
