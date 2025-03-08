import { TABLES } from "../../app/constants/tables.js";

export const carTable = (sequelize, type) => {
	return sequelize.define(TABLES.CAR_TABLE, {
		id:{
			autoIncrement: true,
			primaryKey: true,
			type: type.INTEGER,
		},
		brand: {
			allowNull: false,
			type: type.STRING,
		},
		license_plate: {
			allowNull: false,
			type: type.STRING,
		},
		model: {
			allowNull: false,
			type: type.STRING,
		},
		owner_id: {
			allowNull: false,
			references: {
				model: TABLES.PERSON_TABLE,
				key: "id",
			},
			type: type.INTEGER,
		},
		production_year: {
			allowNull: false,
			type: type.INTEGER,
		},
	},
	{
		createdAt: "created_at",
		deletedAt: "deleted_at",
		updatedAt: "updated_at",
		paranoid: true,
	});
};