import { userModel } from "../models/user.model.js";

import { compareEncrypt, createToken, hashEncrypt, verifyToken } from "../utils/hashes.js";
import { getPaginationStats } from "../utils/tables.js";

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
	//? add user in database.
	data.password = hashEncrypt(data.password);

	let user = await userModel.create(data);
	
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

const existEmail = async (email) => {
	const user = await getOne({ email });
	return !!user;
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
	const user = await getOne({ email }, ["password"]);

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
};

const logout = async (user_id) => {
	const user =  await userModel.update(user_id, { token: null });
	return user;
};

const update = async (user_id, data) => {	
	await userModel.update(user_id, data);

	const user = await getOne({ id: user_id });
	
	return user;
};

export const userService = {
	authentication,
	create,
	existEmail,
  getOne,
	getPage,
	login,
	logout,
	update,
};