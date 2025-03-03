import * as yup from "yup";

import { PERSON_VALIDATIONS } from "@person/constants/person_validations_consts.js";
import { USER_VALIDATIONS } from "@user/constants/user_validations_consts.js";

export const userYupSchema = yup.object().shape({
  doc_number: PERSON_VALIDATIONS.DOC_NUMBER.required("Campo requerido."),
  email: PERSON_VALIDATIONS.EMAIL.required("Campo requerido."),
  name: PERSON_VALIDATIONS.NAME.required("Campo requerido."),
  password: USER_VALIDATIONS.PASSWORD.required("Campo requerido."),
  phone: PERSON_VALIDATIONS.PHONE.required("Campo requerido."),
});