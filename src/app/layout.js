import localFont from "next/font/local";

import TanstackProvider from "@/components/partilas/providers/TanstackProvider";
import Header from "@/components/layouts/Header/Header";

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

const yekanBakh = localFont({
	src: [
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Regular.eot",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Regular.woff",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Medium.eot",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Medium.woff",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/yekan-bakh/YekanBakh-Medium.ttf",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-yekan-bakh",
	weight: "400 500",
});

export const metadata = {
	title: "تورینو",
	description: "تورینو برگزار کننده بهترین تور های داخلی و خارجی",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<body className={`${yekanBakh.variable}`}>
				<TanstackProvider>
					<Header />
					{children}
				</TanstackProvider>
			</body>
		</html>
	);
}
