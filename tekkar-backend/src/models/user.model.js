import { users } from "../database/database.js";

//? constants.
import { ENDPOINTS_ATRS } from "../constants/tables.js";

const getOne = async (whereObj, attributes = []) => {
	const user = await users.findOne({
		attributes: [...ENDPOINTS_ATRS.USER.DETAIL, ...attributes],
		where: whereObj,
	});

	return user;
};

const update = async (user_id, data) => {
	const user = await users.update(data, { 
		where: { id: user_id },
	});

	return user;
};

export const userModel = {
  getOne,
	update,
};