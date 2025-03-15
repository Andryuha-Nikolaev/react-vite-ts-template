import { ContentLayout } from "@/shared/layouts/content-layout";

import s from "./HomePage.module.scss";

export const HomePage = () => {
	return (
		<ContentLayout>
			<div className={s.block}>HOME</div>
		</ContentLayout>
	);
};
