import { personService } from "../services/person.service.js";

import { updatePersonValidation } from "../utils/validations.js";

import { MESSAGES } from "../constants/messages.js";

const update = async (req, res) => {
  const errors = updatePersonValidation(req.body);

  if (errors)
    return res.status(422).json({ errors });
  
  try {
    const person = await personService.update(req.params.id, req.body);

    if (!person)
      return res.status(404).json({ errros: [{ message: MESSAGES.PERSON_NOT_FOUND }]});

    return res.status(200).json(person);
  } catch(err) {
    return res.status(500).json({ err });
  }
};

export const personController = {
  update,
};