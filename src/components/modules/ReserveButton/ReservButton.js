"use client";

import ModalContent from "@/components/layouts/Header/AuthForm/ModalContent/ModalContent";
import ModalContainer from "@/components/partilas/containers/ModalContainer/ModalContainer";
import { useAddToBasket } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ReservButton({ id, style }) {
	const [isOpen, setIsOpen] = useState(false);
	const [mobile, setMobile] = useState("");
	const { mutate } = useAddToBasket();
	const router = useRouter();

	useEffect(() => {
		!isOpen && setMobile("");
	}, [isOpen]);

	const clickHandler = async () => {
		mutate(id, {
			onSuccess: () => {
				router.push("/checkout");
			},
			onError: () => {
				setIsOpen(true);
			},
		});
	};

	return (
		<>
			<button onClick={clickHandler} className={style}>
				رزرو و خرید
			</button>
			{isOpen && (
				<ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
					<ModalContent
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						mobile={mobile}
						setMobile={setMobile}
					/>
				</ModalContainer>
			)}
		</>
	);
}

export default ReservButton;
