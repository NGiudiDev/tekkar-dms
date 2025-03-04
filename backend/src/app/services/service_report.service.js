import { serviceReportModel } from "../models/service_report.model.js";

import { getPaginationStats } from "../utils/tables.js";

const getOne = async (whereObj) => {
  const page = whereObj.page || 1;
  
  //? get car information.
  const carWhereObj = {
    license_plate: whereObj.license_plate,
  };
  
  const car = await serviceReportModel.getCar(carWhereObj);

  if (car !== null) {
    const carObj = car.toJSON();

    if (carObj.person.doc_number === whereObj.owner_doc_number) {
      //? get services information.
      const { count, rows } = await serviceReportModel.getServicesPage(page);

      const stats = await getPaginationStats(page, count);

      return {
        car,
        services: { pagination: stats, list: rows},
      };
    }
  }
  
  return null;
};

export const serviceReportService = {
	getOne,
};