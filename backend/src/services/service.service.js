import { serviceModel } from "../models/service.model.js";

import { getPaginationStats } from "../utils/tables.js";

const create = async (service) => {
	const createdUser = await serviceModel.create(service);

	service = await getOne({ id: createdUser.id });

	return service;
};

const getOne = async (whereObj) => {
	const service = await serviceModel.getOne(whereObj);
	return service;
};

const getPage = async (page, whereObj) => {
	const { count, rows } = await serviceModel.getPage(page, whereObj);

	const stats = await getPaginationStats(page, count);

	return { pagination: stats, list: rows};
};

const update = async (service_id, data) => {
	await serviceModel.update(service_id, data);
	
	const service = await getOne({ id: service_id });

	return service;
};

export const serviceService = {
	create,
	getOne,
	getPage,
	update,
};