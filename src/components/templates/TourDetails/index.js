import ReservButton from "@/components/modules/ReserveButton/ReservButton";
import { origin } from "@/core/constants/constants";
import { displayVehicle } from "@/core/utils/helper";
import {
	FaBus,
	FaCalendarDay,
	FaCircleCheck,
	FaHandHoldingHand,
	FaMapLocationDot,
	FaUsers,
} from "react-icons/fa6";
import "./tourdetails.scss";

function TourDetails({ tour, id }) {
	const {
		title,
		image,
		startDate,
		endDate,
		options,
		price,
		fleetVehicle,
		availableSeats,
		insurance,
	} = tour;

	const getTourDuration = (d1, d2) => {
		const date1 = new Date(d1);
		const date2 = new Date(d2);
		const diffTime = Math.abs(date2 - date1);
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	};

	const days = getTourDuration(startDate, endDate);

	const displayDate = (date) =>
		new Date(date).toLocaleString("fa-IR", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});

	return (
		<div className="lg:bg-[#F3F3F3] flex flex-col grow max-lg:py-6 lg:py-9">
			<div className="container">
				<div className="bg-white lg:border border-gray rounded-lg lg:py-7 lg:px-6">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-11">
						<figure>
							<img src={image} className="rounded-xl w-full" />
						</figure>
						<div className="lg:col-span-2">
							<div className="max-md:flex justify-between items-center max-lg:mb-3">
								<h2 className="max-lg:text-2xl lg:text-3xl font-bold lg:mb-2.5">
									{title}
								</h2>
								<div className="lg:text-lg text-grayDark lg:mb-6">
									{days + 1} روز و {days} شب
								</div>
							</div>
							<ul className="text-[#7D7D7D] grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 max-md:gap-2 mb-10">
								{options.map((option, index) => (
									<li key={index} className="flex items-center xl:text-xl">
										<FaCircleCheck className="text-primary me-2 shrink-0" />
										{option}
									</li>
								))}
							</ul>
							<div className="flex justify-between items-center">
								<div className="flex items-center me-4">
									<span className="text-2xl lg:text-3xl text-cyan-500 font-medium">
										{price}
									</span>{" "}
									<span className="text-sm ms-1">تومان</span>
								</div>
								<ReservButton
									id={id}
									style={
										"bg-primary text-white h-14 max-md:h-12 max-w-52 w-full rounded-lg lg:text-2xl max-md:text-xl"
									}
								/>
							</div>
						</div>
					</div>
					<div className="grid md:grid-cols-6 gap-1 lg:gap-3 tour-details-section">
						<div>
							<div className="wrapper">
								<div className="title">
									<FaMapLocationDot />
									مبدا
								</div>
								<div className="text-black font-medium">
									{origin.find((o) => o.value === tour.origin.id)?.label}
								</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div className="title">
									<FaCalendarDay />
									تاریخ رفت
								</div>
								<div>{displayDate(startDate)}</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div className="title">
									<FaCalendarDay />
									تاریخ برگشت
								</div>
								<div>{displayDate(endDate)}</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div className="title">
									<FaBus />
									حمل و نقل
								</div>
								<div>{displayVehicle(fleetVehicle)}</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div className="title">
									<FaUsers />
									ظرفیت
								</div>
								<div>حداکثر {availableSeats} نفر</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div className="title">
									<FaHandHoldingHand />
									بیمه
								</div>
								<div>{insurance ? "دارد" : "ندارد"}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TourDetails;
