import type React from "react";

import clsx from "clsx";
import { NavLink } from "react-router";

import s from "./RootLink.module.scss";

import type { RootLinkProps } from "../model/types";

export const RootLink = <C extends React.ElementType = typeof NavLink>({
	as,
	children,
	href,
	className,
	colorVariant = "var1",
	...restProps
}: RootLinkProps<C>) => {
	const Component = as || NavLink;

	return (
		<Component
			className={clsx(s.link, s[colorVariant], className && className)}
			to={href}
			{...restProps}
		>
			{children}
		</Component>
	);
};
