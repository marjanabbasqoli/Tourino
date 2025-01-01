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
	src: "../assets/fonts/yekan-bakh/YekanBakh-Regular.eot",
	src: "../assets/fonts/yekan-bakh/YekanBakh-Regular.woff",
	src: "../assets/fonts/yekan-bakh/YekanBakh-Regular.woff2",
	src: "../assets/fonts/yekan-bakh/YekanBakh-Regular.ttf",
	variable: "--font-yekan-bakh",
	weight: "400",
});

export const metadata = {
	title: "تورینو",
	description: "تورینو برگزار کننده بهترین تور های داخلی و خارجی",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl">
			<body className={`${yekanBakh.variable} antialiased`}>
				<TanstackProvider>
					<Header />
					{children}
				</TanstackProvider>
			</body>
		</html>
	);
}
