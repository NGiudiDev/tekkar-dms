import Sequelize from "sequelize";

import dotenv from "dotenv";

import { carTable } from "./tables/car.table.js";
import { serviceTable } from "./tables/service.table.js";
import { userTable } from "./tables/user.table.js";

dotenv.config();

const { DB_NAME, DB_PASSWORD, DB_USER } = process.env;

//? database configuration.
export const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	define: {
		alter: true,
		freezeTableName: true,
	},
	dialect: "mysql",
	host: process.env.DB_HOST,
	logging: false,
});

export const cars = carTable(database, Sequelize);
export const services = serviceTable(database, Sequelize);
export const users = userTable(database, Sequelize);

cars.hasMany(services, { foreignKey: "car_id" });
services.belongsTo(cars, { foreignKey: "car_id" });

//? create database.
database.sync({ force: false })
	.then(() => console.log("Sincronizated table!"))
	.catch ((err) => console.log(`Table synchronization failed! ${err}`));
