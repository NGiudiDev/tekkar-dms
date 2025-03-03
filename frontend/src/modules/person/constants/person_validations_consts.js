import * as yup from "yup";

import { PERSON_DOC_NUMBER_LENGTH, PERSON_DOC_NUMBER_REGEX } from "./person_consts";

export const PERSON_VALIDATIONS = {
  DOC_NUMBER: yup.string()
    .length(PERSON_DOC_NUMBER_LENGTH,`Debe tener ${PERSON_DOC_NUMBER_LENGTH} caracteres`)
    .matches(PERSON_DOC_NUMBER_REGEX.DOC_NUMBER_STRING, "Formato de documento inválido"),
  EMAIL: yup.string().email(),
  NAME: yup.string(),
  PHONE: yup.string(),
};