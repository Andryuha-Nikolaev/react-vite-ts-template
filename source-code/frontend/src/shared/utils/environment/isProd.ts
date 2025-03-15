export const isProd = () => {
	const isProd =
		import.meta.env.VITE_BUILD_PROFILE === "production" ||
		import.meta.env.VITE_BUILD_PROFILE === "prod";

	return isProd;
};
