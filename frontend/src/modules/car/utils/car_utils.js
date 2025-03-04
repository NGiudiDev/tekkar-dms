import { CAR_REGEXS } from "@car/constants/car_consts";

export const isArLicensePlate = (value) => {
	return value && (
		(value.length === 6 && value.match(CAR_REGEXS.AR_LICENSE_PLATE_V1)) ||
    (value.length === 7 && value.match(CAR_REGEXS.AR_LICENSE_PLATE_V2))
	);
};