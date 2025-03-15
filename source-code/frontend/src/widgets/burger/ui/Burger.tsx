import clsx from "clsx";

import { useSiteState } from "@/shared/context/site";
import useScrollLock from "@/shared/hooks/scroll/useScrollLock";
import { ContentLayout } from "@/shared/layouts/content-layout";
import { CustomScrollLayout } from "@/shared/layouts/custom-scroll";

import s from "./Burger.module.scss";
import BurgerNavbar from "./navbar/BurgerNavbar";

export const Burger = () => {
	const { isOpenBurger, isBurgerViewed, closeBurger } = useSiteState();

	useScrollLock(isOpenBurger);

	if (!isBurgerViewed) {
		return null;
	}

	return (
		<div
			onClick={(e) => {
				if (e.target instanceof Element) {
					{
						const link = e.target.closest("a");
						if (link && link?.target !== "_blank") {
							closeBurger();
						}
					}
				}
			}}
			className={clsx(s.block, isOpenBurger && s.open)}
		>
			<CustomScrollLayout className={s.wrapper}>
				<ContentLayout>
					<div className={s.content}>
						<BurgerNavbar />
					</div>
				</ContentLayout>
			</CustomScrollLayout>
		</div>
	);
};
