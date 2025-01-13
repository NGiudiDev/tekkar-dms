import { carModel } from "../models/car.model.js";

import { getPaginationStats } from "../utils/tables.js";

const create = async (car) => {
	const createdUser = await carModel.create(car);

	car = await getOne({ id: createdUser.id });

	return car;
};

const getOne = async (whereObj) => {
	const car = await carModel.getOne(whereObj);

	return car;
};

const getPage = async (page, whereObj) => {
	const { count, rows } = await carModel.getPage(page, whereObj);

	const stats = await getPaginationStats(page, count);

	return { pagination: stats, list: rows};
};

const update = async (car_id, data) => {
	await carModel.update(car_id, data);
	
	const car = await getOne({ id: car_id });

	return car;
};

export const carService = {
	create,
	getOne,
	getPage,
	update,
};