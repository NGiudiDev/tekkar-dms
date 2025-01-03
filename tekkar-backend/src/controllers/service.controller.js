import { serviceService } from "../services/service.service.js";

import {
	createServiceValidation,
	getOneServiceValidation,
	getServicePageValidation,
	updateServiceValidation,
} from "../utils/validations.js";

import { MESSAGES } from "../constants/messages.js";

const create = async (req, res) => {
	const errors = createServiceValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const service = await serviceService.create(req.body);

		return res.status(200).json(service);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getOne = async (req, res) => {
	const id = parseInt(req.params.id);

	const errors = getOneServiceValidation({ id });

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const service = await serviceService.getOne({ id });
		
		if (!service)
			return res.status(404).json({ errros: [{ message: MESSAGES.SERVICE_NOT_FOUND }]});

		return res.status(200).json(service);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getPage = async (req, res) => {
	const errors = getServicePageValidation(req.query);

	if (errors)
		return res.status(422).json({ errors });

	try {
		const { page, ...whereObj } = req.query;

		const servicesObj = await serviceService.getPage(page || 1, whereObj);

		return res.status(200).json(servicesObj);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const update = async (req, res) => {
	const errors = updateServiceValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const service = await serviceService.update(req.params.id, req.body);

		if (!service)
			return res.status(404).json({ errros: [{ message: MESSAGES.SERVICE_NOT_FOUND }]});

		return res.status(200).json(service);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

export const serviceController = {
	create,
	getOne,
	getPage,
	update,
};