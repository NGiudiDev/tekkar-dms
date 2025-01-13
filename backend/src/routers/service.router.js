import express from "express";

import { serviceController } from "../controllers/service.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/:id", authTokenMiddleware, serviceController.getOne);
router.get("/", authTokenMiddleware, serviceController.getPage);
router.post("/", authTokenMiddleware, serviceController.create);
router.put("/:id", authTokenMiddleware, serviceController.update);

export default router;