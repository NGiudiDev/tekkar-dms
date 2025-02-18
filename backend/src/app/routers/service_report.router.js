import express from "express";

import { serviceReportController } from "../controllers/service_report.controller.js";

const router = express.Router();

//* CRUD endpoints.
router.get("/", serviceReportController.getOne);

export default router;