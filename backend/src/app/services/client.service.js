import { clientModel } from "../models/client.model.js";

import { getPaginationStats } from "../utils/tables.js";

const getOne = async (whereObj, attributes) => {
  const client = await clientModel.getOne(whereObj, attributes);
  return client;
};

const getPage = async (page, whereObj) => {
  const { count, rows } = await clientModel.getPage(page, whereObj);

  const stats = await getPaginationStats(page, count);

  return { pagination: stats, list: rows};
};

export const clientService = {
  getOne,
	getPage,
};