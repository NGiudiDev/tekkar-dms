import express from "express";

import { userController } from "../controllers/user.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//? session endpoints.
router.post("/authentication", userController.authentication);
router.post("/login", userController.login);
router.post("/logout", authTokenMiddleware, userController.logout);

//? CRUD endpoints.
router.get("/", authTokenMiddleware, userController.getPage);


export default router;