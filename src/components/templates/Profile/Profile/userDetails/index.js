function UserDetails({ data, setShowForm }) {
	const { mobile, email, firstName, lastName, gender, birthDate, payment } =
		data;

	return (
		<div>
			<button onClick={() => setShowForm(true)}>ویرایش اطلاعات</button>

			<div className="user-profile-row">
				<h3 className="mb-7 font-bold">اطلاعات حساب کاربری</h3>
				<div className="grid grid-cols-2 gap-7 *:flex *:items-center">
					<div>
						<label className="min-w-36 text-grayDark">شماره موبایل</label>
						<div className="font-medium">{mobile}</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">ایمیل</label>
						<div className="font-medium">{email || "-"}</div>
					</div>
				</div>
			</div>

			<div className="user-profile-row">
				<h3 className="mb-7 font-bold">اطلاعات شخصی</h3>
				<div className="grid grid-cols-2 gap-7 *:flex *:items-center">
					<div>
						<label className="min-w-36 text-grayDark">نام</label>
						<div className="font-medium">{firstName || "-"}</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">نام خانوادگی</label>
						<div className="font-medium">{lastName || "-"}</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">جنسیت</label>
						<div className="font-medium">
							{(gender === "male" && "مرد") || (gender === "female" && "زن") || "-"}
						</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">تاریخ تولد</label>
						<div className="font-medium">{birthDate || "-"}</div>
					</div>
				</div>
			</div>

			<div className="user-profile-row">
				<h3 className="mb-7 font-bold">اطلاعات حساب بانکی</h3>
				<div className="grid grid-cols-2 gap-7 *:flex *:items-center">
					<div>
						<label className="min-w-36 text-grayDark">شماره شبا</label>
						<div className="font-medium">{payment?.shaba_code || "-"}</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">شماره کارت</label>
						<div className="font-medium">{payment?.debitCard_code || "-"}</div>
					</div>
					<div>
						<label className="min-w-36 text-grayDark">شماره حساب</label>
						<div className="font-medium">{payment?.accountIdentifier || "-"}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserDetails;
