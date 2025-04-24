import { useState } from "react";
import CheckOTP from "../CheckOTP/CheckOTP";
import SendOTP from "../SendOTP/SendOTP";

function ModalContent({ isOpen, setIsOpen, mobile, setMobile }) {
	const [step, setStep] = useState(1);

	return (
		<>
			{step === 1 && (
				<SendOTP
					setStep={setStep}
					mobile={mobile}
					setMobile={setMobile}
					isOpen={isOpen}
				/>
			)}

			{step === 2 && (
				<CheckOTP
					mobile={mobile}
					setIsOpen={setIsOpen}
					setStep={setStep}
					setMobile={setMobile}
				/>
			)}
		</>
	);
}

export default ModalContent;
