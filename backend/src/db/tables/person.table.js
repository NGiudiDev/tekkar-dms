import { TABLES } from "../../app/constants/tables.js";

export const personTable = (sequelize, type) => {
  return sequelize.define(TABLES.PERSON_TABLE, {
    id:{
      autoIncrement: true,
      primaryKey: true,
      type: type.INTEGER,
    },
    doc_number: {
      allowNull: false,
      type: type.STRING(8),
      validate: {
        len: [8, 8]
      },
    },
    email: {
      allowNull: false,
      type: type.STRING,
    },
    image_url: {
			allowNull: true,
			type: type.STRING,
		},
    name: {
      allowNull: false,
      type: type.STRING,
    },
    phone: {
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
