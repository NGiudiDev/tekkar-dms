import * as yup from "yup";

import { COMMON_VALIDATIONS } from "../../common/constants/common_validations.consts";
import { CAR_VALIDATIONS } from "../constants/car_validations.consts";

export const carYupSchema = yup.object().shape({
	brand: COMMON_VALIDATIONS.TEXT.required("Campo requerido"),
	license_plate: CAR_VALIDATIONS.LICENSE_PLATE.required("Campo requerido"),
	model: CAR_VALIDATIONS.MODEL.required("Campo requerido"),
	owner_id: COMMON_VALIDATIONS.ID.required("Campo requerido"),
	production_year: CAR_VALIDATIONS.PRODUCTION_YEAR.required("Campo requerido"),
});
