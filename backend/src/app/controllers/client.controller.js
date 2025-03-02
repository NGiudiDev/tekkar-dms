import { clientService } from "../services/client.service.js";
import { personService } from "../services/person.service.js";

import {
  createClientValidation,
	getClientPageValidation,
  getOneClientValidation,
  updateClientValidation,
} from "../utils/validations.js";

import { MESSAGES } from "../constants/messages.js";

const create = async (req, res) => {
  const errors = createClientValidation(req.body);

  if (errors)
    return res.status(422).json({ errors });
  
  try {
    const invalidEmail = await personService.existEmail(req.body.email);

    if (invalidEmail)
      return res.status(409).json({ errors: [{ message: MESSAGES.PERSON_EMAIL_DUPLICATED }]});

    const client = await clientService.create(req.body, req.headers);

    return res.status(200).json({ client });
  } catch(err) {
    return res.status(500).json({ err });
  }
};

const getOne = async (req, res) => {
  const id = parseInt(req.params.id);

  const errors = getOneClientValidation({ id });

  if (errors)
    return res.status(422).json({ errors });
  
  try {
    const client = await clientService.getOne({ id });
    
    if (!client)
      return res.status(404).json({ errros: [{ message: MESSAGES.CLIENT_NOT_FOUND }]});

    return res.status(200).json(client);
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

const update = async (req, res) => {
  const errors = updateClientValidation(req.body);

  if (errors)
    return res.status(422).json({ errors });
  
  try {
    const client = await clientService.update(req.params.id, req.body);

    if (!client)
      return res.status(404).json({ errros: [{ message: MESSAGES.CLIENT_NOT_FOUND }]});

    return res.status(200).json(client);
  } catch(err) {
    return res.status(500).json({ err });
  }
};

export const clientController = {
  create,
	getOne,
  getPage,
  update,
};