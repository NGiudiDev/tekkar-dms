import joi from "joi";

import { VALIDATIONS } from "../constants/validations.consts.js";

/******************************************************************************
														🏎️  AUX FUNCTIONS  🏎️
     ********************************************************************/ 

export const validate = (schema, values) => {
	const options = {
		abortEarly: false,
	};

	let { error } = schema.validate(values, options);

	if (error)
		error = error.details.map((detail) => ({
			field: detail.context.key,
			message: detail.message,
		}));

	return error || null;
};

/******************************************************************************
													🏎️  CAR VALIDATIONS  🏎️
     ********************************************************************/ 

export const createCarValidation = car => {
	const carSchema = joi.object({
		brand: VALIDATIONS.COMMON.TEXT.required(),
		license_plate: VALIDATIONS.CAR.LICENSE_PLATE.required(),
		model: VALIDATIONS.COMMON.TEXT.required(),
		owner_id: VALIDATIONS.COMMON.ID.required(),
		production_year: VALIDATIONS.CAR.PRODUCTION_YEAR.required(),
	});

	return validate(carSchema, car);
};

export const getOneCarValidation = (qParams) => {
	const carSchema = joi.object({
		id: VALIDATIONS.COMMON.ID.required(),
	});

	return validate(carSchema, qParams);
};

export const getCarPageValidation = (qParams) => {
	const carSchema = joi.object({
		owner_id: VALIDATIONS.COMMON.ID,
		page: VALIDATIONS.COMMON.PAGE,
	});

	return validate(carSchema, qParams);
};

export const updateCarValidation = (qParams) => {
	const carSchema = joi.object({
		brand: VALIDATIONS.COMMON.TEXT,
		license_plate: VALIDATIONS.CAR.LICENSE_PLATE,
		model: VALIDATIONS.COMMON.TEXT,
		owner_id: VALIDATIONS.COMMON.ID,
		production_year: VALIDATIONS.CAR.PRODUCTION_YEAR,
	});

	return validate(carSchema, qParams);
};

/******************************************************************************
												👥 CLIENT VALIDATIONS 👥
     ********************************************************************/

export const createClientValidation = user => {
	const userSchema = joi.object({
		doc_number: VALIDATIONS.PERSON.DOC_NUMBER,
		email: VALIDATIONS.PERSON.EMAIL,
		name: VALIDATIONS.PERSON.NAME,
		phone: VALIDATIONS.PERSON.PHONE,
	});

	return validate(userSchema, user);
};								

export const getClientPageValidation = (qParams) => {
	const clientSchema = joi.object({
		page: VALIDATIONS.COMMON.PAGE,
	});

	return validate(clientSchema, qParams);
};

export const getOneClientValidation = data => {
	const dataSchema = joi.object({
		id: VALIDATIONS.COMMON.ID,
	});

	return validate(dataSchema, data);
};

export const updateClientValidation = (qParams) => {
	const carSchema = joi.object({
		doc_number: VALIDATIONS.PERSON.DOC_NUMBER,
		email: VALIDATIONS.PERSON.EMAIL,
		name: VALIDATIONS.PERSON.NAME,
		phone: VALIDATIONS.PERSON.PHONE,
	});

	return validate(carSchema, qParams);
};

/******************************************************************************
												👥 PERSON VALIDATIONS 👥
     ********************************************************************/

export const updatePersonValidation = (qParams) => {
	const carSchema = joi.object({
		doc_number: VALIDATIONS.PERSON.DOC_NUMBER,
		email: VALIDATIONS.PERSON.EMAIL,
		image_url: VALIDATIONS.COMMON.TEXT,
		name: VALIDATIONS.PERSON.NAME,
		phone: VALIDATIONS.PERSON.PHONE,
		roles: VALIDATIONS.PERSON.ROLES,
	});

	return validate(carSchema, qParams);
};

/******************************************************************************
												🛠️ SERVICE VALIDATIONS 🛠️
     ********************************************************************/ 

export const createServiceValidation = service => {
	const serviceSchema = joi.object({
		car_id: VALIDATIONS.COMMON.ID.required(),
		description: VALIDATIONS.SERVICE.DESCRIPTION,
		next_service_mileage: VALIDATIONS.SERVICE.MILEAGE,
		performed_at: VALIDATIONS.SERVICE.PERFORMED_AT.required(),
		price: VALIDATIONS.COMMON.PRICE.required(),
		service_mileage: VALIDATIONS.SERVICE.MILEAGE.required(),
		service_duration: VALIDATIONS.SERVICE.SERVICE_DURATION.required(),
		title: VALIDATIONS.COMMON.TEXT.required(),
	});

	return validate(serviceSchema, service);
};

export const getOneServiceValidation = data => {
	const dataSchema = joi.object({
		id: VALIDATIONS.COMMON.ID,
	});

	return validate(dataSchema, data);
};

export const getServicePageValidation = (qParams) => {
	const carSchema = joi.object({
		car_id: VALIDATIONS.COMMON.ID,
		page: joi.number().integer().min(1),
	});

	return validate(carSchema, qParams);
};

export const updateServiceValidation = (qParams) => {
	const serviceSchema = joi.object({
		car_id: VALIDATIONS.COMMON.ID,
		description: VALIDATIONS.SERVICE.DESCRIPTION,
		next_service_mileage: VALIDATIONS.SERVICE.MILEAGE,
		performed_at: VALIDATIONS.SERVICE.PERFORMED_AT,
		price: VALIDATIONS.COMMON.PRICE,
		service_mileage: VALIDATIONS.SERVICE.MILEAGE,
		service_duration: VALIDATIONS.SERVICE.SERVICE_DURATION,
		title: VALIDATIONS.COMMON.TEXT,
	});

	return validate(serviceSchema, qParams);
};

/******************************************************************************
											🛠️ SERVICE REPORT VALIDATIONS 🛠️
     ********************************************************************/

export const getOneServiceReportValidation = (qParams) => {
	const carSchema = joi.object({
		license_plate: VALIDATIONS.CAR.LICENSE_PLATE.required(),
		owner_doc_number: VALIDATIONS.PERSON.DOC_NUMBER.required(),
		page: VALIDATIONS.COMMON.PAGE,
	});

	return validate(carSchema, qParams);
};
												
/******************************************************************************
													👥 USER VALIDATIONS 👥
     ********************************************************************/

export const authenticationValidation = user => {
	const userSchema = joi.object({
		token: joi.string().required(),
		user_id: joi.number().required(),
	});

	return validate(userSchema, user);
};

export const createUserValidation = user => {
	const userSchema = joi.object({
		doc_number: VALIDATIONS.PERSON.DOC_NUMBER,
		email: VALIDATIONS.PERSON.EMAIL,
		name: VALIDATIONS.PERSON.NAME,
		phone: VALIDATIONS.PERSON.PHONE,
		password: VALIDATIONS.USER.PASSWORD,
	});

	return validate(userSchema, user);
};

export const getOneUserValidation = data => {
	const dataSchema = joi.object({
		id: VALIDATIONS.COMMON.ID,
	});

	return validate(dataSchema, data);
};

export const getUserPageValidation = (qParams) => {
	const carSchema = joi.object({
		page: VALIDATIONS.COMMON.PAGE,
	});

	return validate(carSchema, qParams);
};
 
export const loginValidation = user => {
	const userSchema = joi.object({
		email: VALIDATIONS.PERSON.EMAIL.required(),
		password: VALIDATIONS.USER.PASSWORD.required(),
	});

	return validate(userSchema, user);
};

export const logoutValidation = user => {
	const userSchema = joi.object({
		user_id: VALIDATIONS.COMMON.ID.required(),
	});

	return validate(userSchema, user);
};

export const passwordRecoveryValidation = data => {
	const userSchema = joi.object({
		email: VALIDATIONS.PERSON.EMAIL.required(),
	});

	return validate(userSchema, data);
};

export const passwordUpdateValidation = data => {
	const userSchema = joi.object({
		password: VALIDATIONS.USER.PASSWORD.required(),
	});

	return validate(userSchema, data);
};

export const updateUserValidation = user => {
	const userSchema = joi.object({
		doc_number: VALIDATIONS.PERSON.DOC_NUMBER,
		email: VALIDATIONS.PERSON.EMAIL,
		name: VALIDATIONS.PERSON.NAME,
		phone: VALIDATIONS.PERSON.PHONE,
	});

	return validate(userSchema, user);
};