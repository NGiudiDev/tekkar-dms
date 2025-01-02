import dayjs from "dayjs";

import { DATE_FORMAT } from "../constants/settings.conts";

export const getChangedFields = (modifiedObj, initialObj) => {
	const newObj = {};

	Object.keys(initialObj).forEach((field) => {
		if (initialObj[field] !== modifiedObj[field])
			newObj[field] = modifiedObj[field];
	});

	return newObj;
};

export const isEmptyObject = (obj) => {
	return Object.keys(obj).length === 0;
};

export const formatDate = (date) => {
	return dayjs(date).format(DATE_FORMAT);
};