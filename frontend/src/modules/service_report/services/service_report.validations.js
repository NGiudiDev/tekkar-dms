import * as yup from "yup";

import { PERSON_VALIDATIONS } from "@person/constants/person_validations.consts";
import { CAR_VALIDATIONS } from "@car/constants/car_validations.consts";

export const serviceReportYupSchema = yup.object().shape({
  license_plate: CAR_VALIDATIONS.LICENSE_PLATE.required("Campo requerido."),
  owner_doc_number: PERSON_VALIDATIONS.DOC_NUMBER.required("Campo requerido."),
});