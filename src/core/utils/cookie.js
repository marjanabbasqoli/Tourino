"use client";

const setCookie = (name, value, day) => {
	const age = day * 24 * 60 * 60;
	document.cookie = `${name}=${value};max-age=${age}`;
	// document.cookie = `accessToken=${tokens.accessToken}; max-age=${6}`;
	// document.cookie = `refreshToken=${tokens.refreshToken}; max-age= ${
	// 	30 * 24 * 60 * 60
	// }`;
};

const getCookie = (cookieName) => {
	return document.cookie
		.split(";")
		.find((token) => token.trim().split("=")[0] === cookieName)
		?.split("=")[1];
};

const deleteCookie = (cookieName) => {
	document.cookie = `${cookieName}='';max-age=0`;
};

export { setCookie, getCookie, deleteCookie };
