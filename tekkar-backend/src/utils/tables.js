import { SETTINGS } from "../constants/settings.js";

export const getPaginationStats = (page, count) => {
	return {
		page: parseInt(page),
		pages: Math.ceil(count / SETTINGS.PAGE_LIMIT),
		total: parseInt(count),
	};
};
