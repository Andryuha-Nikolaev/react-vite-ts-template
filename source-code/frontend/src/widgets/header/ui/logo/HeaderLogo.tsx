import { NavLink } from "react-router";

import routesConstants from "@/shared/constants/routes";

import s from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
	return (
		<div className={s.block}>
			<NavLink
				aria-label={routesConstants.HOME.name}
				className={s.wrap}
				to={routesConstants.HOME.url}
			>
				LOGO
			</NavLink>
		</div>
	);
};

export default HeaderLogo;
