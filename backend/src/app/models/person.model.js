import { persons } from "../../db/database.js";

import { ENDPOINTS_ATRS } from "../constants/tables.js";
import { SETTINGS } from "../constants/settings.js";

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

const getPage = async (page, whereObj) => {
  let queryObj = {
    attributes: ENDPOINTS_ATRS.PERSON.LIST,
    limit: SETTINGS.PAGE_LIMIT,
    offset: (page - 1) * SETTINGS.PAGE_LIMIT,
    order: [["created_at", "DESC"]],
    where: whereObj,
  };

  const personsObj = await persons.findAndCountAll(queryObj);

  return personsObj;
};

export const personModel = {
  create,
  getOne,
  getPage,
}