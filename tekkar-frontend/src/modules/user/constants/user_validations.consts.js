import * as yup from "yup";

import { DOC_NUMBER_LENGTH } from "../../car/constants/car.consts";
import { USER_REGEXS } from "./user.consts";

export const USER_VALIDATIONS = {
  DOC_NUMBER: yup.string()
    .length(DOC_NUMBER_LENGTH,`Debe tener ${DOC_NUMBER_LENGTH} caracteres`)
    .matches(USER_REGEXS.DOC_NUMBER_STRING, "Formato de documento inválido"),
  EMAIL: yup.string().email(),
  NAME: yup.string(),
  PASSWORD: yup.string(),
  PHONE: yup.string(),
};