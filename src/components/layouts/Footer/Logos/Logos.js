import Image from "next/image";

import aira from "@/assets/images/footer/aira.jpg";
import ecunion from "@/assets/images/footer/ecunion.jpg";
import passengerRights from "@/assets/images/footer/passenger-rights.jpg";
import samandehi from "@/assets/images/footer/samandehi.jpg";
import stateAirline from "@/assets/images/footer/state-airline.jpg";

const logosImage = [aira, ecunion, passengerRights, samandehi, stateAirline];

function Logos() {
	return (
		<div className="flex items-center justify-evenly gap-4 sm:justify-end lg:gap-8">
			{logosImage.map((logo, index) => (
				<Image
					src={logo}
					width="auto"
					height="auto"
					alt="permissions"
					key={index}
				/>
			))}
		</div>
	);
}

export default Logos;
