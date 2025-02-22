import { clientModel } from "../models/client.model.js";

import { getPaginationStats } from "../utils/tables.js";

const getPage = async (page, whereObj) => {
  const { count, rows } = await clientModel.getPage(page, whereObj);

  const stats = await getPaginationStats(page, count);

  return { pagination: stats, list: rows};
};

export const clientService = {
	getPage,
};