import Link from "next/link";

export default function ProfileLayout({ children }) {
	return (
		<>
			<sidebar>
				<Link href="/profile">پروفایل</Link>
				<br />
				<Link href="/profile/my-tours">تورهای من</Link>
				<br />
				<Link href="/profile/transactions">تراکنش ها</Link>
				<br />
			</sidebar>
			{children}
		</>
	);
}
