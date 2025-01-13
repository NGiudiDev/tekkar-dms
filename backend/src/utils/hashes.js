import { SETTINGS } from "../constants/settings.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import dotenv from "dotenv";

dotenv.config();

export function compareEncrypt(value, hash) {
	return bcrypt.compareSync(value, hash);
}

export function hashEncrypt(password) {
	const salt = bcrypt.genSaltSync(SETTINGS.ENCRYPT_SALT);
	return bcrypt.hashSync(password, salt);
}

export function createToken(data) {
	return jwt.sign(data, process.env.JWT_KEY);
}

export function verifyToken(token) {
	let decoded = null;
	
	try {
		decoded = jwt.verify(token,  process.env.JWT_KEY);
	} catch {
		console.error("jwt malformed");
	}

	return decoded;
}