import joi from "joi";

import { isArLicensePlate } from "../utils/models/cars.utils.js";
import { getYear } from "../utils/dates.js";

import { REGEXS } from "./regex.js";

const DOC_NUMBER_LENGTH = 8;
const MIN_YEAR_PRODUCTION = 1950;

const year = getYear();

export const VALIDATIONS = {
	CAR: {
		LICENSE_PLATE: joi.string().custom((value) => isArLicensePlate(value)),
		PRODUCTION_YEAR: joi.number().min(MIN_YEAR_PRODUCTION).max(year),
	},
	COMMON: {
		ID: joi.number().integer().min(1),
		PAGE: joi.number().integer(),
		PRICE: joi.number().min(0),
		TEXT: joi.string(),
	},
	SERVICE: {
		DESCRIPTION: joi.string().empty(null || ""),
		MILEAGE: joi.number().integer().min(0),
		PERFORMED_AT: joi.date().max("now"),
		SERVICE_DURATION: joi.number().integer().min(0),
	},
	PERSON: {
		DOC_NUMBER: joi.string().length(DOC_NUMBER_LENGTH).regex(REGEXS.DOC_NUMBER_STRING),
		EMAIL: joi.string().email(),
		NAME: joi.string(),
		PHONE: joi.string(), //TODO: validar con una librería que valida números telefónicos.
	},
	USER: {
		PASSWORD: joi.string(),
	},
};