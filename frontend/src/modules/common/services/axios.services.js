import axios from "axios";

import { getLoginOfLocalStorage } from "../../session/services/session.local_storage";

export const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json"
	}
});

export const deleteAxios = (url) => {
	const { token } = getLoginOfLocalStorage();

	const options = {
		headers: {
			"Authorization": `${token}`,
		}
	};

	return axiosClient.delete(url, options)
		.then((res) => res.data);
};

export const getAxios = (url) => {
	const { token } = getLoginOfLocalStorage();

	const options = {
		headers: {
			"Authorization": `${token}`,
		}
	};

	return axiosClient.get(url, options)
		.then((res) => res.data);
};

export const postAxios = (url, data) => {
	const { token } = getLoginOfLocalStorage();

	const options = {
		headers: {
			"Authorization": `${token}`,
		}
	};

	return axiosClient.post(url, data, options)
		.then((res) => res.data);
};

export const putAxios = (url, data) => {
	const { token } = getLoginOfLocalStorage();

	const options = {
		headers: {
			"Authorization": `${token}`,
		}
	};

	return axiosClient.put(url, data, options)
		.then((res) => res.data);
};