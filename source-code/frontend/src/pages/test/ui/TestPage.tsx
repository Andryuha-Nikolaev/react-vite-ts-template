import { NavLink } from "react-router";

import { ModalId, ModalSearchParams } from "@/features/modal/config/constants";
import { useModal } from "@/features/modal/ui/ModalProvider";
import { TestForm } from "@/features/send-test-form";
import { ContentLayout } from "@/shared/layouts/content-layout";
import { RootButton } from "@/shared/ui/buttons/root";
import { RootLink } from "@/shared/ui/links/root";
import { Social } from "@/shared/ui/social";

import s from "./TestPage.module.scss";

export const TestPage = () => {
	const { showModal, showSuccessModal, showErrorModal } = useModal();

	const showDefaultModal = () => {
		showModal({
			title: "Title ",
			text: "Text",
			onHideCallback() {
				alert("callbaaaaaaaaaaaack");
			},
		});
	};

	const showDefaultModalWithChildren = () => {
		showModal({
			children: <NavLink to={"/"}>На главную</NavLink>,
		});
	};

	const showDefaultSuccessModal = () => {
		showSuccessModal();
	};

	const showDefaultErrorModal = () => {
		showErrorModal({ hiddenCloseButton: true });
	};

	const showFeedbackModal = () => {
		showModal({ modalId: ModalId.FEEDBACK_FORM, disableOverlayClick: true });
	};

	return <h1 style={{ textAlign: "center" }}>TEST</h1>;

	return (
		<ContentLayout>
			<div className={s.block}>
				<h1 style={{ textAlign: "center" }}>TEST</h1>
				<div className={s.wrap}>
					<hr style={{ width: "100%" }} />
					<h2>Typography:</h2>
					<h1>h1 Прототип нового сервиса — это как структура</h1>
					<h2>h2 Прототип нового сервиса — это как структура</h2>
					<h3>h3 Прототип нового сервиса — это как структура</h3>
					<h4>h4 Прототип нового сервиса — это как структура</h4>
					<p>p Прототип нового сервиса — это как структура</p>
					<p className={s.additionalText}>
						p additional Прототип нового сервиса — это как структура
					</p>
					<small>small Прототип нового сервиса — это как структура</small>
					<p className={s.helperText}>
						p helper Прототип нового сервиса — это как структура
					</p>
					<hr style={{ width: "100%" }} />
					<h2>Buttons:</h2>
					<RootButton onClick={() => console.log("aaaaaaaaaaaaaa")}>
						Root Button
					</RootButton>
					<RootButton colorVariant="var2">Root Button var2</RootButton>
					<RootButton colorVariant="var3">Root Button var3</RootButton>
					<RootButton size="sm">Root Button sm</RootButton>
					<RootButton size="md">Root Button md</RootButton>
					<RootButton size="lg">Root Button lg</RootButton>
					<RootButton disabled>Root Button disabled</RootButton>
					<RootButton to={"/"} as={NavLink}>
						Root Button as Next Link to home
					</RootButton>
					<RootButton isLoading>Root Button Loading</RootButton>
					<RootButton colorVariant="var2" size="sm" isLoading>
						Root Button Loading
					</RootButton>

					<RootButton
						Icon={
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									d="M20 4 4 20M4 4l16 16"
								></path>
							</svg>
						}
						colorVariant="var3"
					>
						Root Button With Icon
					</RootButton>
					<RootButton
						Icon={
							<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path
									stroke="currentColor"
									strokeLinecap="round"
									d="M20 4 4 20M4 4l16 16"
								></path>
							</svg>
						}
						iconPosition="right"
						size="sm"
						colorVariant="var2"
					>
						Root Button With Icon Right
					</RootButton>
					<hr style={{ width: "100%" }} />
					<h2>Links:</h2>
					<RootLink as={"button"}>RootLink as=button</RootLink>
					<RootLink to={"/test/aaa"}>RootLink var1 to dynamic route</RootLink>
					<RootLink colorVariant="var2" to={"/"}>
						RootLink var2
					</RootLink>
					<RootLink target="_blank" rel="noreferrer" href="/" as="a">
						RootLink as=a
					</RootLink>
					<hr style={{ width: "100%" }} />
					<h2>Social:</h2>
					<Social />
					<hr style={{ width: "100%" }} />
					<h2>Modal:</h2>
					<RootButton colorVariant="var3" onClick={showDefaultModal}>
						showDefaultModal with hide callback
					</RootButton>
					<RootButton
						colorVariant="var2"
						onClick={showDefaultModalWithChildren}
					>
						show Default Modal With Children
					</RootButton>

					<RootButton colorVariant="var3" onClick={showDefaultSuccessModal}>
						showDefaultSuccessModal
					</RootButton>
					<RootButton colorVariant="var3" onClick={showDefaultErrorModal}>
						showDefaultErrorModal hiddenCloseButton
					</RootButton>
					<RootButton colorVariant="var3" onClick={showFeedbackModal}>
						showFeedbackModal disableOverlayClick
					</RootButton>
					<RootButton
						colorVariant="var2"
						as={NavLink}
						to={`/test?${ModalSearchParams.ACTION}=feedback-form`}
					>
						showFeedbackModal with query
					</RootButton>
					<hr style={{ width: "100%" }} />
					<h2 id="form">Forms:</h2>
					<TestForm />
				</div>
			</div>
		</ContentLayout>
	);
};
