import Sidebar from "@/components/layouts/Sidebar/Sidebar";

export default function ProfileLayout({ children }) {
	return (
		<div className="py-9">
			<div className="container">
				<div className="grid grid-cols-4 gap-6">
					<div>
						<Sidebar />
					</div>
					<div className="col-span-3">{children}</div>
				</div>
			</div>
		</div>
	);
}
