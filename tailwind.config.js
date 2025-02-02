// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xl: "1220px",
				"2xl": "1220px",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				primaryDark: "#10411B",
				grayLight: "var(--grayLight)",
				gray: "rgba(0, 0, 0, 0.2)",
				grayDark: "var(--grayDark)",
			},
		},
	},
	plugins: [],
};
