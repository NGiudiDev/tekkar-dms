import express from "express";

import { serviceController } from "../controllers/service.controller.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/:id", serviceController.getOne);
router.get("/", serviceController.getPage);
router.post("/", serviceController.create);
router.put("/:id", serviceController.update);

export default router;