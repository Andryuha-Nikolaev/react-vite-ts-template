import { ModalProvider } from "../features/modal";
import { SiteStateProvider } from "../shared/context/site";

type ProvidersProps = {
	children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
	return (
		<SiteStateProvider>
			<ModalProvider>{children}</ModalProvider>
		</SiteStateProvider>
	);
}
