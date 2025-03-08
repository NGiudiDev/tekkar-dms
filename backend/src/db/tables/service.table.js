import { SETTINGS } from "../../app/constants/settings.js";
import { TABLES } from "../../app/constants/tables.js";

export const serviceTable = (sequelize, type) => {
	return sequelize.define(TABLES.SERVICE_TABLE, {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: type.INTEGER,
		},
		car_id: {
			allowNull: false,
			references: {
				model: TABLES.CAR_TABLE,
				key: "id",
			},
			type: type.INTEGER,
		},
		description: {
			allowNull: true,
			type: type.TEXT,
		},
		next_service_mileage: {
			allowNull: true,
			type: type.INTEGER,
		},
		performed_at: {
			allowNull: false,
			type: type.DATEONLY,
		},
		price: {
			allowNull: false,
			type: type.DECIMAL(SETTINGS.DECIMAL_LENGTH, SETTINGS.DECIMAL_POINT),
		},
		service_duration: {
			allowNull: false,
			type: type.INTEGER,
		},
		service_mileage: {
			allowNull: false,
			type: type.INTEGER,
		},
		title: {
			allowNull: false,
			type: type.STRING,
		},
	},
	{
		createdAt: "created_at",
		deletedAt: "deleted_at",
		updatedAt: "updated_at",
		paranoid: true,
	});
};