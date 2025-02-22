import { personModel } from "./person.model.js";

import { Op } from "sequelize";

const create = async (data) => {
  data.roles = "client";

  const client  = await personModel.create(data);
	return client;
};

const getOne = async (whereObj) => {
  const client = await personModel.getOne(whereObj);
  return client;
};

const getPage = async (page, whereObj) => {
  const newWhereObj = {
    ...whereObj,
    roles: { [Op.like]: "%client%" },
  };

  const clientsObj = await personModel.getPage(page, newWhereObj);
  return clientsObj;
};

export const clientModel = {
  create,
	getOne,
  getPage,
}