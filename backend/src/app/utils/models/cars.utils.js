import { REGEXS } from "../../constants/regex.js";

export const isArLicensePlate = (value) => {
	return value && (
		(value.length === 6 && value.match(REGEXS.AR_LICENSE_PLATE_V1)) ||
    (value.length === 7 && value.match(REGEXS.AR_LICENSE_PLATE_V2))
	);
};