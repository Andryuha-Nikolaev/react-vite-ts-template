import { Outlet } from "react-router";

import { PageLayout } from "@/shared/layouts/page";
import { Analytics } from "@/widgets/analytics";
import { Burger } from "@/widgets/burger";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import { Providers } from "./Providers";

export default function RootLayout() {
	return (
		<Providers>
			<PageLayout>
				<Header />
				<Burger />
				<main>
					<Outlet />
				</main>
				<Footer />
			</PageLayout>
			<Analytics />
		</Providers>
	);
}
