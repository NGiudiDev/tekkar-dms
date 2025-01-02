import axios from "axios";

export const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json"
	}
});

export const deleteAxios = (url) => {
	return axiosClient.delete(url)
		.then((res) => res.data);
};

export const getAxios = (url) => {
	return axiosClient.get(url)
		.then((res) => res.data);
};

export const postAxios = (url, data) => {
	return axiosClient.post(url, data)
		.then((res) => res.data);
};

export const putAxios = (url, data) => {
	return axiosClient.put(url, data)
		.then((res) => res.data);
};