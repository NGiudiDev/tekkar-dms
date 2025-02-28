import * as yup from "yup";

import { isArLicensePlate } from "@car/utils/car.utils";

import { CURRENT_YEAR } from "@common/constants/settings.conts";
import { MIN_YEAR_PRODUCTION } from "@car/constants/car.consts";

export const CAR_VALIDATIONS = {
	LICENSE_PLATE: yup.string()
		.test("car_license_plate_test", "Patente inválida", (value) => isArLicensePlate(value)),
	MODEL: yup.string(),
	PRODUCTION_YEAR: yup.number()
		.min(MIN_YEAR_PRODUCTION, `${MIN_YEAR_PRODUCTION}. es el año mínimo de fabricación`)
		.max(CURRENT_YEAR, `${CURRENT_YEAR} es el año máximo de fabricación`),
};