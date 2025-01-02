//? service
import { serviceReportService } from "../services/service_report.service.js";

//? functions
import { getOneServiceReportValidation } from "../utils/validations.js";

const getOne = async (req, res) => {
  const errors = getOneServiceReportValidation(req.query);

  if (errors)
    return res.status(422).json({ errors });

  try {
    const car = await serviceReportService.getOne(req.query);
    
    if (!car)
      return res.status(404).json({ errros: [{ message: MESSAGES.CAR_NOT_FOUND }]});
    
    return res.status(200).json(car);
  } catch(err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};

export const serviceReportController = {
	getOne,
};