import { users } from "../../db/database.js";

import { ENDPOINTS_ATRS } from "../constants/tables.js";
import { SETTINGS } from "../constants/settings.js";

const create = async (data) => {
	const user  = await users.create(data);
	return user;
};

const getOne = async (whereObj, attributes = []) => {
	const user = await users.findOne({
		attributes: [...ENDPOINTS_ATRS.USER.DETAIL, ...attributes],
		where: whereObj,
	});

	return user;
};

const getPage = async (page, whereObj) => {
	let queryObj = {
		attributes: ENDPOINTS_ATRS.USER.LIST,
		limit: SETTINGS.PAGE_LIMIT,
		offset: (page - 1) * SETTINGS.PAGE_LIMIT,
		order: [["created_at", "DESC"]],
		where: whereObj,
	};

	const usersObj = await users.findAndCountAll(queryObj);

	return usersObj;
};

const update = async (user_id, data) => {
	const user = await users.update(data, { 
		where: { id: user_id },
	});

	return user;
};

export const userModel = {
	create,
  getOne,
	getPage,
	update,
};