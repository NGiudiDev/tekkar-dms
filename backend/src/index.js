import express from "express";
import dotenv from "dotenv";
import cors  from "cors";

import carRouter from "./app/routers/car.router.js";
import clientRouter from "./app/routers/client.router.js";
import imageRouter from "./app/routers/images.router.js";
import serviceRouter from "./app/routers/service.router.js";
import serviceReportRouter from "./app/routers/service_report.router.js";
import userRouter from "./app/routers/user.router.js";

import { scheduleCronJobs } from "./jobs/jobs.js";

import { SETTINGS } from "./app/constants/settings.js";

dotenv.config();

const port = process.env.API_PORT || SETTINGS.DEFAULT_SERVER_PORT;

const app = express();

//? app configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? routers
app.use("/cars", carRouter);
app.use("/clients", clientRouter);
app.use("/images", imageRouter);
app.use("/services", serviceRouter);
app.use("/service_report", serviceReportRouter);
app.use("/users", userRouter);

//? server initialization.
app.listen(port, () => {
  scheduleCronJobs();

	console.log(`Server runing in port ${port}...`);
});

app.on("error", err => {
	console.log(`Server error: ${err.message}`);
});
