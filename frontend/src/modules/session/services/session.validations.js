import * as yup from "yup";

import { USER_VALIDATIONS } from "../../user/constants/user_validations.consts";
import { PERSON_VALIDATIONS } from "../../person/constants/person_validations.consts";

export const loginYupSchema = yup.object().shape({
  email: PERSON_VALIDATIONS.EMAIL.required("Campo requerido."),
  password: USER_VALIDATIONS.PASSWORD.required("Campo requerido.")
});
