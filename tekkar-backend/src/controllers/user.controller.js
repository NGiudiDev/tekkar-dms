//? service
import { userService } from "../services/user.service.js";

//? functions
import {
	authenticationValidation,
	loginValidation,
	logoutValidation,
} from "../utils/validations.js";

//? constants
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

const login = async (req, res) => {
	const errors = loginValidation(req.body);

	if (errors)
		return res.status(422).json({ errors });
	
	try {
		const { email, password } = req.body;
		
		const user = await userService.login(email, password);

		if (!user)
			return res.status(422).json({ errros: [{ message: MESSAGES.USER_INVALID_LOGIN}]});

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

export const userController = {
	authentication,
	login,
	logout,
};