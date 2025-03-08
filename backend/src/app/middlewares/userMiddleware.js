import { userModel } from "../models/user.model.js";

import { verifyToken } from "../utils/hashes.js";

import { MESSAGES } from "../constants/messages.js";

export const authTokenMiddleware = async (req, res, next) => {
	const token = req.headers.authorization;
	
	if (!token)
		return res.status(401).json({ message: MESSAGES.TOKEN_REQUIRED });

	try {
		const decoded = verifyToken(token);

		const id = decoded !== null ? parseInt(decoded.user_id) : 0;

		if (isNaN(id) || id === 0)
			return res.status(401).json({ message: MESSAGES.INVALID_TOKEN });

		const user = await userModel.getOne({ id }, ["token"]);

		if (!user || user.token !== token)
			return res.status(401).json({ message: MESSAGES.INVALID_TOKEN });

		next();
	} catch (err) {
		return res.status(500).json({ err });
	}
};