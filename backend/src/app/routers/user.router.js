import express from "express";

import { userController } from "../controllers/user.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//? session endpoints.
router.post("/authentication", userController.authentication);
router.post("/login", userController.login);
router.post("/logout", authTokenMiddleware, userController.logout);
router.post("/password_recovery", userController.passwordRecovery);
router.post("/password_update", userController.passwordUpdate);

//? CRUD endpoints.
router.get("/", authTokenMiddleware, userController.getPage);
router.get("/:id", authTokenMiddleware, userController.getOne);
router.post("/", authTokenMiddleware, userController.create);
router.put("/:id", authTokenMiddleware, userController.update);

export default router;