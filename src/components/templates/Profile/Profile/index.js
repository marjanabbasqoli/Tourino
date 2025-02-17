import { useEffect, useState } from "react";

import ProfileForm from "./form";
import UserDetails from "./userDetails";

function Profile({ data }) {
	const { nationalCode } = data;
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		if (!nationalCode) setShowForm(true);
	}, []);

	return (
		<div>
			{showForm ? (
				<ProfileForm data={data} setShowForm={setShowForm} />
			) : (
				<UserDetails data={data} setShowForm={setShowForm} />
			)}
		</div>
	);
}

export default Profile;
