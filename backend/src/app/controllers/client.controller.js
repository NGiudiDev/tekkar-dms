import { clientService } from "../services/client.service.js";

import {
	getClientPageValidation,
  getOneClientValidation,
} from "../utils/validations.js";

import { MESSAGES } from "../constants/messages.js";


const getOne = async (req, res) => {
  const id = parseInt(req.params.id);

  const errors = getOneClientValidation({ id });

  if (errors)
    return res.status(422).json({ errors });
  
  try {
    const user = await clientService.getOne({ id });
    
    if (!user)
      return res.status(404).json({ errros: [{ message: MESSAGES.CLIENT_NOT_FOUND }]});

    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json({ err });
  }
};

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
	getOne,
  getPage,
};