import dayjs from "dayjs";

import { DATE_FORMAT } from "@common/constants/settings_conts";

export const formatDate = (date) => {
	return dayjs(date).format(DATE_FORMAT);
};

export const getYear = () => {
	const now = new Date();
	return now.getFullYear();
};