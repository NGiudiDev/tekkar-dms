import * as yup from "yup";

import { COMMON_VALIDATIONS } from "../../common/constants/common_validations.consts";
import { SERVICE_VALIDATIONS } from "../constants/service_validations.consts";

export const serviceValidation = yup.object().shape({
  description: SERVICE_VALIDATIONS.DESCRIPTION.required(),
  next_service_mileage: SERVICE_VALIDATIONS.MILEAGE.required(),
  performed_at: SERVICE_VALIDATIONS.PERFORMED_AT.required(),
  price: COMMON_VALIDATIONS.PRICE.required(),
  service_mileage: SERVICE_VALIDATIONS.MILEAGE.required(),
  service_duration: SERVICE_VALIDATIONS.SERVICE_DURATION.required(),
  title: COMMON_VALIDATIONS.TEXT.required(),
});