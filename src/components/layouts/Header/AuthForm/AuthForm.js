"use client";

import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";

import { useGetUserData } from "@/services/queries";
import { deleteCookie } from "@/core/utils/cookie";

import ModalContainer from "@/components/partilas/containers/ModalContainer/ModalContainer";
import DropDown from "@/components/modules/DropDown/DropDown";
import ModalContent from "./ModalContent/ModalContent";

function AuthForm() {
	const [mobile, setMobile] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		!isOpen && setMobile("");
	}, [isOpen]);

	const { data, refetch, isError } = useGetUserData(enabled);

	const logoutHandler = () => {
		deleteCookie("accessToken");
		deleteCookie("refreshToken");
		setEnabled(false);
		refetch();
	};

	if (data?.data && !isError)
		return <DropDown logoutHandler={logoutHandler} {...data.data} />;

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="flex items-center max-lg:order-3 max-lg:rounded-full py-1.5 px-1.5 lg:px-5 border-2 border-primary text-primary rounded-lg hover:text-white hover:bg-primary transition-all duration-300"
			>
				<FaUser />
				<span className="ms-1 font-medium text-lg max-lg:hidden">
					ورود&nbsp; |&nbsp; ثبت نام
				</span>
			</button>
			<ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
				<ModalContent
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					mobile={mobile}
					setMobile={setMobile}
				/>
			</ModalContainer>
		</>
	);
}

export default AuthForm;
