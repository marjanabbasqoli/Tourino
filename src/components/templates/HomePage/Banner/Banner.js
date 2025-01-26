import Image from "next/image";
import banner from "@/assets/images/home/banner.jpg";

function Banner() {
	return (
		<Image
			src={banner}
			width="1439"
			height="350"
			className="mx-auto min-h-[120px] object-cover object-left"
			alt="tourino banner"
		/>
	);
}

export default Banner;
