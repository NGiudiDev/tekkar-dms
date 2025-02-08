import { getAxios, postAxios, putAxios } from "../../common/services/axios.services";

export const createUser = (user) => {
	return postAxios("/users", user);
};

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

export const updateUserImage = (id, data, headers) => {
	return putAxios(`/users/${id}/profile_image`, data, headers);
};