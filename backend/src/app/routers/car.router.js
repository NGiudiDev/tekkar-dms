import express from "express";

import { carController } from "../controllers/car.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/", authTokenMiddleware, carController.getPage);
router.get("/:id", authTokenMiddleware, carController.getOne);
router.post("/", authTokenMiddleware, carController.create);
router.put("/:id", authTokenMiddleware, carController.update);

export default router;