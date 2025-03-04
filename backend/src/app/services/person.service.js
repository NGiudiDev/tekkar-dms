import { personModel } from "../models/person.model.js";

const existEmail = async (email) => {
	const person = await personModel.getOne({ email });
	return person !== null;
};

const getOne = async (whereObj) => {
  const person = await personModel.getOne(whereObj);

  return person;
};

const update = async (person_id, data) => {
  await personModel.update(person_id, data);
  
  const person = await getOne({ id: person_id });

  return person;
};

export const personService = {
  existEmail,
  getOne,
  update,
};