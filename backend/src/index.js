import express from "express";
import dotenv from "dotenv";
import cors  from "cors";

import carRouter from "./routers/car.router.js";
import serviceRouter from "./routers/service.router.js";
import serviceReportRouter from "./routers/service_report.router.js";
import userRouter from "./routers/user.router.js";

import { SETTINGS } from "./constants/settings.js";

dotenv.config();

const port = process.env.API_PORT || SETTINGS.DEFAULT_SERVER_PORT;

const app = express();

//? app configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? routers
app.use("/cars", carRouter);
app.use("/services", serviceRouter);
app.use("/service_report", serviceReportRouter);
app.use("/users", userRouter);

//? server initialization.
app.listen(port, () => {
	console.log(`Server runing in port ${port}...`);
});

app.on("error", err => {
	console.log(`Server error: ${err.message}`);
});
