function ModalContainer({ children, isOpen, setIsOpen }) {
	if (!isOpen) return;
	return (
		<div>
			<button onClick={() => setIsOpen(false)}>close</button>
			{children}
		</div>
	);
}

export default ModalContainer;
