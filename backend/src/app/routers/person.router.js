import express from "express";

import { personController } from "../controllers/person.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//* CRUD endpoints.
router.put("/:id", authTokenMiddleware, personController.update);

export default router;