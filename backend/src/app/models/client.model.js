import { personModel } from "./person.model.js";

import { Op } from "sequelize";

const create = async (data) => {
  data.roles = "client";

  const client  = await personModel.create(data);
	return client;
};

const getOne = async (where) => {
  const whereObj = {
    ...where,
    roles: { [Op.like]: "%client%" },
  };

  const client = await personModel.getOne(whereObj);
  return client;
};

const getPage = async (page, where) => {
  const whereObj = {
    ...where,
    roles: { [Op.like]: "%client%" },
  };

  const clientsObj = await personModel.getPage(page, whereObj);
  return clientsObj;
};

const update = async (client_id, data) => {
  const client = await personModel.update(client_id, data);

  return client;
};

export const clientModel = {
  create,
	getOne,
  getPage,
  update,
};