import { getAxios, postAxios, putAxios } from "@common/services/axios_services";

export const createCar = (car) => {
	return postAxios("/cars", car);
};

export const getCarDetail = (paramsObj) => {
	const qString = new URLSearchParams(paramsObj);

	return getAxios(`/cars/detail?${qString}`);
};

export const getCarDetailById = (id) => {
	return getAxios(`/cars/${id}`);
};

export const getCarPage = (paramsObj) => {
	const qString = new URLSearchParams(paramsObj);

	return getAxios(`/cars?${qString}`);
};

export const updateCarDetail = (id, data) => {
	return putAxios(`/cars/${id}`, data);
};