import { clientService } from "../services/client.service.js";

import {
	getClientPageValidation,
} from "../utils/validations.js";

const getPage = async (req, res) => {
  const errors = getClientPageValidation(req.query);

  if (errors)
    return res.status(422).json({ errors });

  try {
    const { page, ...whereObj } = req.query;

    const clientsObj = await clientService.getPage(page || 1, whereObj);

    return res.status(200).json(clientsObj);
  } catch(err) {
    return res.status(500).json({ err });
  }
};

export const clientController = {
	getPage,
};