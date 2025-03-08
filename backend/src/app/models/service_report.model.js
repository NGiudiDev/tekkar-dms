import { cars, persons, services } from "../../db/database.js";

import { ENDPOINTS_ATRS } from "../constants/tables.js";
import { SETTINGS } from "../constants/settings.js";

const getCar = async (whereObj) => {
  const car = await cars.findOne({
    attributes: ENDPOINTS_ATRS.CAR.DETAIL,
    include: [{
      attributes: ENDPOINTS_ATRS.PERSON.DETAIL,
      model: persons,
    }],
    where: whereObj,
  });

  return car;
};

const getServicesPage = async (page, whereObj) => {
  let queryObj = {
    attributes: ENDPOINTS_ATRS.SERVICE.LIST,
    limit: SETTINGS.PAGE_LIMIT,
    offset: (page - 1) * SETTINGS.PAGE_LIMIT,
    order: [["performed_at", "DESC"]],
    where: whereObj,
  };

  const servicesObj = await services.findAndCountAll(queryObj);

  return servicesObj;
};

export const serviceReportModel = {
	getCar,
	getServicesPage,
};