import { TABLES } from "../../constants/tables.js";

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
		owner_doc_number: {
			allowNull: false,
			type: type.STRING(8),
			validate: {
				len: [8, 8]
			},
		},
		owner_name: {
			allowNull: false,
			type: type.STRING,
		},
		owner_phone: {
			allowNull: false,
			type: type.STRING,
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
