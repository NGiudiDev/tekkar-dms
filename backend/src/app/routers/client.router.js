import express from "express";

import { clientController } from "../controllers/client.controller.js";

import { authTokenMiddleware } from "../middlewares/userMiddleware.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/", authTokenMiddleware, clientController.getPage);
router.get("/:id", authTokenMiddleware, clientController.getOne);
router.post("/", authTokenMiddleware, clientController.create);
router.put("/:id", authTokenMiddleware, clientController.update);

export default router;