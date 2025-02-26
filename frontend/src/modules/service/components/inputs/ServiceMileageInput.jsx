import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServiceMileageInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Kilometraje"
			margin={attrs.margin}
			name="service_mileage"
		/>
	);
};

ServiceMileageInput.propTypes = {
	margin: PropTypes.string,
};