import * as yup from "yup";

import { USER_VALIDATIONS } from "../constants/user_validations.consts.js";

export const userValidation = yup.object().shape({
  doc_number: USER_VALIDATIONS.DOC_NUMBER.required("Campo requerido."),
  email: USER_VALIDATIONS.EMAIL.required("Campo requerido."),
  name: USER_VALIDATIONS.NAME.required("Campo requerido."),
  phone: USER_VALIDATIONS.PHONE.required("Campo requerido."),
});
