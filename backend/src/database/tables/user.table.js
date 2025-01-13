import { TABLES } from "../../constants/tables.js";

export const userTable = (sequelize, type) => {
	return sequelize.define(TABLES.USER_TABLE, {
		id:{
			autoIncrement: true,
			primaryKey: true,
			type: type.INTEGER,
		},
		doc_number: {
			allowNull: true,
			type: type.STRING,
		},
		email: {
			allowNull: false,
			type: type.STRING,
		},
		name: {
			allowNull: false,
			type: type.STRING,
		},
		password: {
			allowNull: false,
			type: type.STRING,
		},
		phone: {
			allowNull: true,
			type: type.STRING,
		},
		token: {
			allowNull: true,
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
