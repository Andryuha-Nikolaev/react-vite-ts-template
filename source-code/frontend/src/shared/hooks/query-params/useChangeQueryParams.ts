import { useNavigate } from "react-router";

const useChangeQueryParams = () => {
	const navigate = useNavigate();

	const handleChangeParams = (
		queryString = "", // строка запроса
		method = "push", // метод изменения URL: push или replace
		scroll = false // будет ли прокрутка к началу страницы
	) => {
		const url = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;

		if (method === "push") {
			navigate(url, { replace: false });
		} else if (method === "replace") {
			navigate(url, { replace: true });
		}

		if (scroll) {
			window.scrollTo(0, 0);
		}
	};

	return handleChangeParams;
};

export default useChangeQueryParams;
