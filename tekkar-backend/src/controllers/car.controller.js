//? service
import { carService } from "../services/car.service.js";

//? functions
import {
	createCarValidation,
	getOneCarValidation,
	getCarPageValidation,
	updateCarValidation,
} from "../utils/validations.js";

//? constants
import { MESSAGES } from "../constants/messages.js";

const create = async (req, res) => {
	const errors = createCarValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const car = await carService.create(req.body);

		return res.status(200).json(car);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getOne = async (req, res) => {
	const errors = getOneCarValidation(req.params);

	if (errors)
		return res.status(422).json({ errors });

	try {
		const car = await carService.getOne(req.params);
		
		if (!car)
			return res.status(404).json({ errros: [{ message: MESSAGES.CAR_NOT_FOUND }]});

		return res.status(200).json(car);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getPage = async (req, res) => {
	const errors = getCarPageValidation(req.query);

	if (errors)
		return res.status(422).json({ errors });

	try {
		const { page, ...whereObj } = req.query;

		const carsObj = await carService.getPage(page || 1, whereObj);

		return res.status(200).json(carsObj);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const update = async (req, res) => {
	const errors = updateCarValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const car = await carService.update(req.params.id, req.body);

		if (!car)
			return res.status(404).json({ errros: [{ message: MESSAGES.CAR_NOT_FOUND }]});

		return res.status(200).json(car);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

export const carController = {
	create,
	getOne,
	getPage,
	update,
};