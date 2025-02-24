import { displayPerisanDate, displayVehicle } from "@/core/utils/helper";
import {
	origin as originArray,
	destination as destinationArray,
} from "@/core/constants/constants";
import { FaAlgolia, FaPlane } from "react-icons/fa6";

function MyTourCard({
	title,
	fleetVehicle,
	origin,
	destination,
	startDate,
	endDate,
	availableSeats,
	price,
}) {
	const today = Date.now();
	const start = new Date(startDate).getTime();

	return (
		<div className="border border-grayLight rounded-lg [&:not(:last-child)]:mb-4">
			<div className="flex justify-between max-md:flex-col-reverse border-b border-grayLight p-4">
				<div className="grid grid-cols-2 gap-4 grow max-sm:text-sm">
					<div className="flex items-center font-bold sm:text-lg">
						<FaAlgolia className="me-2" /> {title}
					</div>
					<div className="flex items-center font-medium max-sm:ms-auto">
						<FaPlane className="me-2" />
						{`سفر با ${displayVehicle(fleetVehicle)}`}
					</div>
					<div className="flex items-center max-sm:col-span-2 max-sm:justify-between">
						<div className="font-bold">
							<span>{`${originArray.find((o) => o.value === origin.id).label} `}</span>
							به
							<span>{` ${
								destinationArray.find((o) => o.value === destination.id).label
							} `}</span>
						</div>
						<span className="text-[rgba(0,0,0,.6)]">
							<span className="text-xl mx-1.5">.</span>
							{displayPerisanDate(startDate)}
						</span>
					</div>
					<div className="max-sm:col-span-2 max-sm:flex justify-between items-center">
						<span className="font-bold">تاریخ برگشت </span>

						<span className="text-[rgba(0,0,0,.6)]">
							<span className="text-xl mx-1.5">.</span>
							{`${displayPerisanDate(endDate)}`}
						</span>
					</div>
				</div>
				<span
					className={`self-start max-md:self-end max-md:mb-3 text-xs px-2 rounded-full leading-5  ${
						availableSeats > 0 && start < today
							? "bg-rose-100 text-rose-600"
							: "bg-green-100 text-green-600"
					}`}
				>
					{availableSeats > 0 && start < today ? "به اتمام رسیده" : "در حال برگزاری"}
				</span>
			</div>
			<div className="p-4">
				<span className="text-[rgba(0,0,0,.6)]">مبلغ پرداخت شده:</span>{" "}
				<span className="font-bold"> {price} </span>
				<span className="text-[rgba(0,0,0,.6)] text-sm">تومان</span>
			</div>
		</div>
	);
}

export default MyTourCard;
