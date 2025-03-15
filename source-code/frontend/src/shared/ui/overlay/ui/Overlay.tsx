import clsx from "clsx";

import s from "./Overlay.module.scss";

import type { OverlayProps } from "../model/types";

export const Overlay = ({
	children,
	isShown,
	onMouseDown,
	className,
}: OverlayProps) => {
	return (
		<div
			onMouseDown={onMouseDown}
			className={clsx(s.overlay, !!isShown && s.open, className && className)}
		>
			{children}
		</div>
	);
};
