import Link from "next/link";

import {
	displayDuration,
	displayMonth,
	displayVehicle,
} from "@/core/utils/helper";

import ReservButton from "@/components/modules/ReserveButton/ReservButton";

function TourCard({ tour }) {
	const { id, image, title, startDate, endDate, price, fleetVehicle } = tour;

	const startMonth = displayMonth(startDate);
	const endMonth = displayMonth(endDate);

	return (
		<div className="border border-grayLight rounded-xl max-w-[330px] mx-auto">
			<Link href={`tours/${id}`} alt={title}>
				<img src={image} alt={title} className="rounded-t-xl w-full" />
			</Link>
			<div className="p-2">
				<Link
					href={`tours/${id}`}
					alt={title}
					className="inline-block text-xl font-medium mb-1"
				>
					{title}
				</Link>
				<div className="block text-[#282828]/70 w-52 whitespace-nowrap overflow-hidden text-ellipsis text-[15px]">
					<div className="inline-block after:inline-block after:mx-1 after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#282828]/50">
						<span>{startMonth} </span>
						{startMonth !== endMonth && <span>و {endMonth} </span>}
						ماه
					</div>
					<span className="after:inline-block after:mx-1 after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-[#282828]/50">
						{displayDuration(startDate, endDate)} روزه
					</span>
					<span>{displayVehicle(fleetVehicle)}</span>
				</div>
			</div>
			<div className="border-t border-grayLight p-2 flex items-center justify-between ">
				<ReservButton
					style={"bg-primary text-white py-1 px-2 rounded-md"}
					id={id}
				/>
				<div className="font-medium">
					<span className="text-[#009ECA]">{price}</span>{" "}
					<span className="text-xs">تومان</span>
				</div>
			</div>
		</div>
	);
}

export default TourCard;
