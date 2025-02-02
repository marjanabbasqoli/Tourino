import { FaRegCircleXmark } from "react-icons/fa6";

function ModalContainer({ children, isOpen, setIsOpen }) {
	if (!isOpen) return;
	return (
		<div className="fixed top-0 start-0 w-full h-full flex items-center justify-center bg-black/25 backdrop-blur-sm z-10 p-4">
			<div className="bg-white rounded-[20px] w-[561px] max-w-full p-5 md:px-8 md:pb-8 pt-5 relative">
				<button
					onClick={() => setIsOpen(false)}
					className="block ms-auto translate-x-[-35%] md:translate-x-[-100%] text-lg text-stone-500"
				>
					<FaRegCircleXmark />
				</button>
				{children}
			</div>
		</div>
	);
}

export default ModalContainer;
