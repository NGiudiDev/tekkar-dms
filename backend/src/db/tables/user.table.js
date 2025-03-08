import { TABLES } from "../../app/constants/tables.js";

export const userTable = (sequelize, type) => {
	return sequelize.define(TABLES.USER_TABLE, {
		id:{
			autoIncrement: true,
			primaryKey: true,
			type: type.INTEGER,
		},
		password: {
			allowNull: false,
			type: type.STRING,
		},
		person_id: {
			allowNull: false,
			references: {
				model: TABLES.PERSON_TABLE,
				key: "id",
			},
			type: type.INTEGER,
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