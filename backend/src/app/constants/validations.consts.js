import joi from "joi";

import { isArLicensePlate } from "../utils/models/cars.utils.js";
import { getYear } from "../utils/dates.js";

import { SETTINGS } from "./settings.js";
import { REGEXS } from "./regex.js";

const PERSON_DOC_NUMBER_LENGTH = 8;
const MIN_YEAR_PRODUCTION = 1886;

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
		DESCRIPTION: joi.string().allow(null, ""),
		MILEAGE: joi.number().integer().min(0),
		PERFORMED_AT: joi.date().max("now"),
		SERVICE_DURATION: joi.number().integer().min(0),
	},
	PERSON: {
		DOC_NUMBER: joi.string().length(PERSON_DOC_NUMBER_LENGTH).regex(REGEXS.DOC_NUMBER_STRING),
		EMAIL: joi.string().email(),
		NAME: joi.string(),
		PHONE: joi.string(),
		ROLES: joi.string().custom((value, helpers) => {
				if (value) {
					const valuesArray = value.split(",");
					const isValidArray = valuesArray.every(item => SETTINGS.USER_TYPES_LIST.includes(item));

					return isValidArray ? value : helpers.error("invalid");
				}

				return helpers.error("invalid");				
			}),
	},
	USER: {
		PASSWORD: joi.string(),
	},
};