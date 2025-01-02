import { cars } from "../database/database.js";

//? constants
import { ENDPOINTS_ATRS } from "../constants/tables.js";
import { SETTINGS } from "../constants/settings.js";

const create = async (data) => {
	const car  = await cars.create(data);
	return car;
};

const getOne = async (whereObj) => {
	const car = await cars.findOne({
		attributes: ENDPOINTS_ATRS.CAR.DETAIL,
		where: whereObj,
	});

	return car;
};

const getPage = async (page, whereObj) => {
	let queryObj = {
		attributes: ENDPOINTS_ATRS.CAR.LIST,
		limit: SETTINGS.PAGE_LIMIT,
		offset: (page - 1) * SETTINGS.PAGE_LIMIT,
		order: [["created_at", "DESC"]],
		where: whereObj,
	};

	const carsObj = await cars.findAndCountAll(queryObj);

	return carsObj;
};

const update = async (car_id, data) => {
	const car = await cars.update(data, { 
		where: { id: car_id },
	});

	return car;
};

export const carModel = {
	create,
	getOne,
	getPage,
	update,
}