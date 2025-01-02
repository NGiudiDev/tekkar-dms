import * as yup from "yup";

import { CAR_VALIDATIONS } from "../../car/constants/car_validations.consts";

export const servviceReportValidation = yup.object().shape({
  license_plate: CAR_VALIDATIONS.LICENSE_PLATE.required("Campo requerido."),
  owner_doc_number: CAR_VALIDATIONS.OWNER_DOC_NUMBER.required("Campo requerido."),
});
