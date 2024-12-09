"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "../utils/cookie";

function page() {
	useEffect(() => {
		const token = getCookie("accessToken");
		if (!token) redirect("/");
	}, []);

	return <div>page</div>;
}

export default page;
