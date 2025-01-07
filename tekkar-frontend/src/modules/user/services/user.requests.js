import { getAxios, putAxios } from "../../common/services/axios.services";

export const getUserDetail = (id) => {
	return getAxios(`/users/${id}`);
};

export const getUserPage = (paramsObj) => {
	const qString = new URLSearchParams(paramsObj);

	return getAxios(`/users?${qString}`);
};

export const updateUserDetail = (id, data) => {
	return putAxios(`/users/${id}`, data);
};