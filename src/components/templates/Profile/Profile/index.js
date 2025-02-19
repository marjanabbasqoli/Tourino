import { useEffect, useState } from "react";

import ProfileForm from "./form";
import UserDetails from "./userDetails";

import "./profile.scss";

function Profile({ data }) {
	const { nationalCode } = data;
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		if (!nationalCode) setShowForm(true);
	}, []);

	const showStyle = "visible opacity-100";
	const hideStyle = "invisible opacity-0 absolute";

	return (
		<>
			<div
				className={`transition-opacity duration-300 ${
					!showForm ? hideStyle : showStyle
				}`}
			>
				<ProfileForm data={data} setShowForm={setShowForm} />
			</div>

			<div
				className={`transition-opacity duration-300 ${
					showForm ? hideStyle : showStyle
				}`}
			>
				<UserDetails data={data} setShowForm={setShowForm} />
			</div>
		</>
	);
}

export default Profile;
