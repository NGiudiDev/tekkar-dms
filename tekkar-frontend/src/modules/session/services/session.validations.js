import * as yup from "yup";

import { SESSION_VALIDATIONS } from "../constants/session_validations.consts";

export const loginValidation = yup.object().shape({
  email: SESSION_VALIDATIONS.EMAIL.required("Campo requerido."),
  password: SESSION_VALIDATIONS.PASSWORD.required("Campo requerido.")
});
