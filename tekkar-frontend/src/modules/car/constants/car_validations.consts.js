import { isArLicensePlate } from "../utils/car.utils";
import * as yup from "yup";

import { DOC_NUMBER_LENGTH, MIN_YEAR_PRODUCTION, CAR_REGEXS } from "./car.consts";
import { CURRENT_YEAR } from "../../common/constants/settings.conts";


export const CAR_VALIDATIONS = {
	LICENSE_PLATE: yup.string()
		.test("car_license_plate_test", "Patente inválida", (value) => isArLicensePlate(value)),
	MODEL: yup.string(),
	OWNER_DOC_NUMBER: yup.string()
		.length(DOC_NUMBER_LENGTH,`Debe tener ${DOC_NUMBER_LENGTH} caracteres`)
		.matches(CAR_REGEXS.DOC_NUMBER_STRING, "Formato de documento inválido"),
	OWNER_NAME: yup.string(),
	OWNER_PHONE: yup.string(),
	PRODUCTION_YEAR: yup.number()
		.min(MIN_YEAR_PRODUCTION, `${MIN_YEAR_PRODUCTION}. es el año mínimo de fabricación`)
		.max(CURRENT_YEAR, `${CURRENT_YEAR} es el año máximo de fabricación`),
};
