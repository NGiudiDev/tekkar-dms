import dotenv from "dotenv";

import { emailService } from "../../app/services/email.service.js";

import { personModel } from "../models/person.model.js";
import { userModel } from "../models/user.model.js";

import { passwordRecoveryEmail } from "../../emails/models/user.emails.js";

import { compareEncrypt, createToken, hashEncrypt, verifyToken } from "../utils/hashes.js";
import { getPaginationStats } from "../utils/tables.js";

dotenv.config();

const authentication = async (user_id, token) => {
	const decoded = verifyToken(token);

	if (decoded.type !== "login")
		return null;
	
	const user = await getOne({ id: user_id }, ["token"]);

	if (!user || user.token !== token)
		return null;
	
	return user;
};

const create = async (data) => {
	//? create person in database.
	const personData = {
		doc_number: data.doc_number,
		email: data.email,
		name: data.name,
		phone: data.phone,
		roles: "user",
	};

	let person = await personModel.create(personData);

	//? create user in database.
	const userData = {
		password: hashEncrypt(data.password),
		person_id: person.id,
	};
	
	let user = await userModel.create(userData);
	
	//? create token.
	const USER_TOKEN_OBJ = {
		user_id: user.id,
	};

	user.token = createToken(USER_TOKEN_OBJ);

	await user.save();

	//? return user.
	user = await getOne({ id: user.id });

	return user;
};

const getOne = async (whereObj, attributes) => {
	const user = await userModel.getOne(whereObj, attributes);
	return user;
};

const getPage = async (page) => {
	const options = {};

	const { count, rows } = await userModel.getPage(page, options);

	const stats = await getPaginationStats(page, count);

	return { pagination: stats, list: rows};
};

const login = async (email, password) => {
	const person = await personModel.getOne({ email });

	if (person !== null) {
		const user = await getOne({ person_id: person.id }, ["password"]);

		//? check if the password is valid.
		if (!user || !compareEncrypt(password, user.password)) {
			return null;
		}

		//? generate and save a token.
		const LOGIN_USER_TOKEN_OBJ = {
			user_id: user.id,
			type: "login",
		};

		user.token = createToken(LOGIN_USER_TOKEN_OBJ);
		await user.save();

		delete user.dataValues.password;

		return user;
	}

	return null;
};

const logout = async (user_id) => {
	const user =  await userModel.update(user_id, { token: null });
	return user;
};

const passwordRecovery = async (data) => {
	const person = await personModel.getOne(data);

	if (person !== null) {
		const user = await getOne({ person_id: person.id });

		if (user) {
			//? generate and save a token.
			const RECOVERY_USER_TOKEN_OBJ = {
				user_id: user.id,
				type: "password_recovery",
			};

			user.token = createToken(RECOVERY_USER_TOKEN_OBJ);
			await user.save();

			const userObj = user.toJSON();

			const mailOptions = {
				subject: "Recupero de contraseña",
				to: userObj.person.email,
				html: passwordRecoveryEmail({ 
					name: userObj.person.name,
					href: `${process.env.APP_URL}/password_update?token=${user.token}`,
				}),
			};

			emailService.send(mailOptions);

			return true;
		}
	}

	return false;
};

const update = async (user_id, data) => {	
	await userModel.update(user_id, data);

	const user = await getOne({ id: user_id });
	
	return user;
};

export const userService = {
	authentication,
	create,
  getOne,
	getPage,
	login,
	logout,
	passwordRecovery,
	update,
};