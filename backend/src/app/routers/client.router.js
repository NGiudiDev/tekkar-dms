import express from "express";

import { clientController } from "../controllers/client.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/", authTokenMiddleware, clientController.getPage);

export default router;