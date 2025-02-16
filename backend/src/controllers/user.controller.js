import { userService } from "../services/user.service.js";
import {
	authenticationValidation,
	createUserValidation,
	getOneUserValidation,
	getUserPageValidation,
	loginValidation,
	logoutValidation,
	updateUserValidation,
} from "../utils/validations.js";

import { MESSAGES } from "../constants/messages.js";

const authentication = async (req, res) => {
	const errors = authenticationValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const { token, user_id } = req.body;

		const user = await userService.authentication(user_id, token);

		if (!user) {
			return res.status(422).json({ errros: [{ message: MESSAGES.USER_UNAUTHORIZED }]});
		}
	
		return res.status(200).json({ user });
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const create = async (req, res) => {
	const errors = createUserValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const invalidEmail = await userService.existEmail(req.body.email);

		if (invalidEmail)
			return res.status(409).json({ errors: [{ message: MESSAGES.USER_EMAIL_DUPLICATED }]});

		const user = await userService.create(req.body, req.headers);

		return res.status(200).json({ user });
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getOne = async (req, res) => {
	const id = parseInt(req.params.id);

	const errors = getOneUserValidation({ id });

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const user = await userService.getOne({ id });
		
		if (!user)
			return res.status(404).json({ errros: [{ message: USER_NOT_FOUND }]});

		return res.status(200).json(user);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const getPage = async (req, res) => {
	const errors = getUserPageValidation(req.query);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const page = parseInt(req.query.page) || 1;

		const usersObj = await userService.getPage(page || 1, req.headers);

		return res.status(200).json(usersObj);
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const login = async (req, res) => {
	const errors = loginValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const { email, password } = req.body;
		
		const user = await userService.login(email, password);

		if (!user)
			return res.status(422).json({ errros: [{ message: MESSAGES.USER_INVALID_LOGIN }]});

		return res.status(200).json({ user });
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const logout = async (req, res) => {
	const errors = logoutValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });

	try {
		const { user_id } = req.body;

		const user = await userService.logout(user_id);

		if (!user)
			return res.status(404).json({ errros: [{ message: MESSAGES.USER_NOT_FOUND }]});

		return res.status(200).json({ message: MESSAGES.USER_LOGOUT_SUCCESFULL });
	} catch(err) {
		return res.status(500).json({ err });
	}
};

const update = async (req, res) => {
	const errors = updateUserValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const user = await userService.update(req.params.id, req.body);

		if (!user)
			return res.status(404).json({ errros: [{ message: USER_NOT_FOUND }]});

		return res.status(200).json({ user });
	} catch(err) {
		return res.status(500).json({ err });
	}
};

export const userController = {
	authentication,
	create,
	getOne,
	getPage,
	login,
	logout,
	update,
};