import { api } from "..";

export const sendFormData = (url: string, data: FormData) => {
	return api.post(url, data, {
		headers: { "Content-Type": "multipart/form-data" },
	});
};
