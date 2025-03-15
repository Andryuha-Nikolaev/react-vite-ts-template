import { useEffect } from "react";

import clsx from "clsx";

import { useModal } from "@/features/modal/ui/ModalProvider";
import useGetQueryParams from "@/shared/hooks/query-params/useGetQueryParams";
import useScrollLock from "@/shared/hooks/scroll/useScrollLock";
import { CustomScrollLayout } from "@/shared/layouts/custom-scroll";
import { CloseButton } from "@/shared/ui/buttons/close";
import { Overlay } from "@/shared/ui/overlay";

import DefaultModal from "./default/DefaultModal";
import FeedbackModal from "./feedback/FeedbackModal";
import s from "./Modal.module.scss";

import { ModalId, ModalSearchParams } from "../config/constants";
import type { ModalComponentsMap } from "../model/types";

const Modal = () => {
	const modalContext = useModal();

	if (!modalContext) {
		throw new Error("Modal must be used within a ModalProvider");
	}

	const { modalConfig, hideModal, isShown, showModal } = modalContext;

	const modalId = modalConfig?.modalId || ModalId.DEFAULT;

	useScrollLock(isShown);

	const params = useGetQueryParams();

	const modalQuery = params.get(ModalSearchParams.ACTION);

	const validModalIds = Object.values(ModalId);

	useEffect(() => {
		if (modalQuery && validModalIds.includes(modalQuery as ModalId)) {
			showModal({ modalId: modalQuery as ModalId });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalQuery]);

	if (!modalConfig) {
		return null;
	}

	const modalComponents: ModalComponentsMap = {
		[ModalId.DEFAULT]: <DefaultModal />,
		[ModalId.FEEDBACK_FORM]: <FeedbackModal />,
	};

	return (
		<Overlay
			onMouseDown={() => {
				if (!modalConfig.disableOverlayClick) {
					hideModal();
				}
			}}
			isShown={isShown}
		>
			<div
				onMouseDown={(e) => e.stopPropagation()}
				onClick={(e) => {
					if (e.target instanceof Element) {
						{
							const link = e.target.closest("a");
							if (link && link?.target !== "_blank") {
								hideModal();
							}
						}
					}
				}}
				className={clsx(s.wrap, s[modalId])}
			>
				<CustomScrollLayout className={s.scroll}>
					<div className={s.content}>
						{!modalConfig.hiddenCloseButton && (
							<div className={s.close}>
								<CloseButton onClick={hideModal} />
							</div>
						)}
						{modalComponents[modalId]}
					</div>
				</CustomScrollLayout>
			</div>
		</Overlay>
	);
};

export default Modal;
