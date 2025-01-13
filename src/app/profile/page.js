"use client";

import { useGetUserData } from "@/services/queries";
import { useRouter } from "next/navigation";

function ProfilePage() {
	const { data, error, isPending } = useGetUserData();
	const router = useRouter();

	if (isPending) return <div>loading...</div>;

	if (error) return router.push("/");

	return <div>{data.data.mobile}</div>;
}

export default ProfilePage;
