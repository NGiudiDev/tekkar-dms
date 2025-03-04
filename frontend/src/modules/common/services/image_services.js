import { postAxios } from "./axios_services";

export const uploadImage = (data, headers) => {
	return postAxios("/images/upload", data, headers);
};