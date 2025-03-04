import { clientModel } from "../models/client.model.js";

import { getPaginationStats } from "../utils/tables.js";


const create = async (client) => {
  let createdClient = await clientModel.create(client);

  client = await getOne({ id: createdClient.id });

  return client;
};

const getOne = async (whereObj, attributes) => {
  const client = await clientModel.getOne(whereObj, attributes);
  return client;
};

const getPage = async (page, whereObj) => {
  const { count, rows } = await clientModel.getPage(page, whereObj);

  const stats = await getPaginationStats(page, count);

  return { pagination: stats, list: rows};
};

const update = async (client_id, data) => {
  await clientModel.update(client_id, data);
  
  const client = await getOne({ id: client_id });

  return client;
};

export const clientService = {
  create,
  getOne,
	getPage,
  update
};