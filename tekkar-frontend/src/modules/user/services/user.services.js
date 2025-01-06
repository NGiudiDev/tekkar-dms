import { getAxios } from "../../common/services/axios.services";

export const getUserPage = (paramsObj) => {
	const qString = new URLSearchParams(paramsObj);

	return getAxios(`/users?${qString}`);
};
