import * as yup from "yup";

export const SERVICE_VALIDATIONS = {
  DESCRIPTION: yup.string(),
  MILEAGE: yup.number().integer().min(0),
  PERFORMED_AT: yup.date().test(
    "car_performed_at_test",
    "El día debe ser igual o anterior al día actual.",
    (value) => {
      if (!value) return false;
      
      const inputDate = new Date(value.getFullYear(), value.getMonth(), value.getDate());
      
      const today = new Date();
      const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      
      //? Compare the input date with today's date, ignoring time components.
      return inputDate <= currentDate;
    }
  ),
  SERVICE_DURATION: yup.number().integer().min(0),
};
