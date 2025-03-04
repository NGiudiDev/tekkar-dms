import { getAxios, postAxios, putAxios } from "@common/services/axios_services";

export const createService = (service) => {
	return postAxios("/services", service);
};

export const getServiceDetail = (id) => {
	return getAxios(`/services/${id}`);
};

export const getServicePage = (paramsObj) => {
	const qString = new URLSearchParams(paramsObj);

	return getAxios(`/services?${qString}`);
};

export const updateServiceDetail = (id, data) => {
	return putAxios(`/services/${id}`, data);
};