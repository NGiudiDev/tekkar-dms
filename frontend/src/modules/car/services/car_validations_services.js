import * as yup from "yup";

import { COMMON_VALIDATIONS } from "@common/constants/common_validations_consts";
import { CAR_VALIDATIONS } from "@car/constants/car_validations_consts";

export const carCreationSchema = yup.object().shape({
	brand: COMMON_VALIDATIONS.TEXT.required("Campo requerido"),
	license_plate: CAR_VALIDATIONS.LICENSE_PLATE.required("Campo requerido"),
	model: CAR_VALIDATIONS.MODEL.required("Campo requerido"),
	owner_id: COMMON_VALIDATIONS.ID.required("Campo requerido"),
	production_year: CAR_VALIDATIONS.PRODUCTION_YEAR.required("Campo requerido"),
});

export const carUpdateSchema = yup.object().shape({
	brand: COMMON_VALIDATIONS.TEXT.required("Campo requerido"),
	license_plate: CAR_VALIDATIONS.LICENSE_PLATE.required("Campo requerido"),
	model: CAR_VALIDATIONS.MODEL.required("Campo requerido"),
	production_year: CAR_VALIDATIONS.PRODUCTION_YEAR.required("Campo requerido"),
});