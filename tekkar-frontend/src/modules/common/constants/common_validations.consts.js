import * as yup from "yup";

export const COMMON_VALIDATIONS = {
  PRICE: yup.number().min(0),
  TEXT: yup.string(),
};