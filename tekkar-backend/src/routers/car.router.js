import express from "express";

import { carController } from "../controllers/car.controller.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/", carController.getPage);
router.get("/:id", carController.getOne);
router.post("/", carController.create);
router.put("/:id", carController.update);

export default router;