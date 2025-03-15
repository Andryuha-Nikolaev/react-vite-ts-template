import type { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import s from "./CloseButton.module.scss";
import { CloseIcon } from "./icons/close-icon/CloseIcon";

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const CloseButton = ({
	onClick,
	className,
	...restProps
}: CloseButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={clsx(s.button, className)}
			aria-label="Закрыть"
			type="button"
			{...restProps}
		>
			<CloseIcon />
		</button>
	);
};
