import type React from "react";
import { createContext, Suspense, useContext, useState } from "react";

import type {
	ModalConfigProps,
	ModalProps,
} from "@/features/modal/model/types";
import Modal from "@/features/modal/ui/Modal";
import { ErrorMessages } from "@/shared/constants/errorMessages";
import useChangeQueryParams from "@/shared/hooks/query-params/useChangeQueryParams";

import { ModalSearchParams } from "../config/constants";

const ModalContext = createContext<ModalProps>({
	modalConfig: null,
	hideModal: () => {},
	showModal: () => {},
	showSuccessModal: () => {},
	showErrorModal: () => {},
	isShown: false,
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalConfig, setModalConfig] = useState<ModalConfigProps>(null);
	const [isShown, setIsShown] = useState(false);

	const showModal = (config: ModalConfigProps) => {
		setModalConfig(config);
		setTimeout(() => {
			setIsShown(true);
		}, 10);
	};

	const showSuccessModal = (config?: ModalConfigProps) => {
		showModal({
			type: "success",
			...config,
		});
	};

	const showErrorModal = (config?: ModalConfigProps) => {
		showModal({
			title: ErrorMessages.UNKNOWN,
			type: "error",
			...config,
		});
	};

	const handleChangeParams = useChangeQueryParams();

	const hideModal = () => {
		setIsShown(false);

		setTimeout(() => {
			setModalConfig(null);
		}, 200);

		const params = new URLSearchParams(window.location.search);
		const modalQuery = params.get(ModalSearchParams.ACTION);

		if (modalQuery) {
			params.delete(ModalSearchParams.ACTION);
			params.delete(ModalSearchParams.TOKEN);
			handleChangeParams(params.toString(), "replace");
		}

		if (modalConfig?.onHideCallback) {
			modalConfig.onHideCallback();
		}
	};

	return (
		<ModalContext.Provider
			value={{
				modalConfig,
				showModal,
				showSuccessModal,
				showErrorModal,
				hideModal,
				isShown,
			}}
		>
			{children}
			<Suspense>
				<Modal />
			</Suspense>
		</ModalContext.Provider>
	);
};
