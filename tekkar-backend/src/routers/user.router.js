import express from "express";

import { userController } from "../controllers/user.controller.js";

const router = express.Router();

//? session endpoints.
router.post("/authentication", userController.authentication);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

export default router;