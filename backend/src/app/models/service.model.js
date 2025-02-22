import { Sequelize, Op } from "sequelize";

import { cars, persons, services } from "../../db/database.js";

import { formatDate, getDate } from "../utils/dates.js";

import { ENDPOINTS_ATRS } from "../constants/tables.js";
import { SETTINGS } from "../constants/settings.js";

const create = async (data) => {
	const service  = await services.create(data);
	return service;
};

const getExpiredServices = async () => {
	//? retrieves a list of services that will expire in 1 month. 
	const today = getDate();

	let queryObj = {
		include: [{
			attributes: ENDPOINTS_ATRS.SERVICE.EXPIRED_SERVICE_MAIL,
			include: [{
				attributes: ENDPOINTS_ATRS.PERSON.DETAIL,
				model: persons,
			}],
			model: cars,
		}],
		where: Sequelize.where(
			Sequelize.fn("DATE", Sequelize.literal("DATE_ADD(performed_at, INTERVAL (service_duration - 1) MONTH)")),
			Op.eq,
			formatDate(today),
		)
	};

	const expiredServices = await services.findAll(queryObj);
	
	return expiredServices;
}

const getOne = async (whereObj) => {
	const service = await services.findOne({
		attributes: ENDPOINTS_ATRS.SERVICE.DETAIL,
		include: [
			{
				attributes: ENDPOINTS_ATRS.CAR.DETAIL,
				include: [{
					attributes: ENDPOINTS_ATRS.PERSON.DETAIL,
					model: persons,
				}],
				model: cars,
			}
		],
		where: whereObj,
	});

	return service;
};

const getPage = async (page, whereObj) => {
	let queryObj = {
		attributes: ENDPOINTS_ATRS.SERVICE.LIST,
		include: [
			{
				attributes: ENDPOINTS_ATRS.CAR.LIST,
				include: [{
					attributes: ENDPOINTS_ATRS.PERSON.DETAIL,
					model: persons,
				}],
				model: cars,
			}
		],
		limit: SETTINGS.PAGE_LIMIT,
		offset: (page - 1) * SETTINGS.PAGE_LIMIT,
		order: [["created_at", "DESC"]],
		where: whereObj,
	};

	const servicesObj = await services.findAndCountAll(queryObj);

	return servicesObj;
};

const update = async (service_id, data) => {
	const service = await services.update(data, { 
		where: { id: service_id },
	});

	return service;
};

export const serviceModel = {
	create,
	getExpiredServices,
	getOne,
	getPage,
	update,
};