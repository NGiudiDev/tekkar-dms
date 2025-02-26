import * as yup from "yup";

export const imageYupSchema = yup.object().shape({
  images: yup
    .array()
    .min(1, "Debe haber exactamente un elemento")
    .max(1, "Debe haber exactamente un elemento"),
});