import Sidebar from "@/components/layouts/Sidebar/Sidebar";

export default function ProfileLayout({ children }) {
	return (
		<div className="py-9">
			<div className="container">
				<div className="lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
					<div>
						<Sidebar />
					</div>
					<div className="lg:col-span-2 xl:col-span-3">{children}</div>
				</div>
			</div>
		</div>
	);
}
