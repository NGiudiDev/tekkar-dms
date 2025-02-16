import { postAxios } from "./axios.services";

export const uploadImage = (data, headers) => {
	return postAxios(`/images/upload`, data, headers);
};