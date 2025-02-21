import { persons } from "../../db/database.js";

import { ENDPOINTS_ATRS } from "../constants/tables.js";

const create = async (data) => {
	const person  = await persons.create(data);
	return person;
};

const getOne = async (whereObj) => {
  const person = await persons.findOne({
    attributes: ENDPOINTS_ATRS.PERSON.DETAIL,
    where: whereObj,
  });

  return person;
};

export const personModel = {
  create,
	getOne,
}