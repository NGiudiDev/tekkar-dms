import * as yup from "yup";

import { PERSON_REGEXS } from "./person.consts";

export const DOC_NUMBER_LENGTH = 8;

export const PERSON_VALIDATIONS = {
  DOC_NUMBER: yup.string()
    .length(DOC_NUMBER_LENGTH,`Debe tener ${DOC_NUMBER_LENGTH} caracteres`)
    .matches(PERSON_REGEXS.DOC_NUMBER_STRING, "Formato de documento inválido"),
  EMAIL: yup.string().email(),
  NAME: yup.string(),
  PHONE: yup.string(),
};
