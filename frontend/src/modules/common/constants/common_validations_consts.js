import * as yup from "yup";

export const COMMON_VALIDATIONS = {
  ID: yup.number().min(1),
  PRICE: yup.number().min(0),
  TEXT: yup.string(),
};