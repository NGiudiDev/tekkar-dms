import React from "react";
import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
	service: {},
};

export const ServiceMileageCol = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin}>
			{attrs.service.service_mileage} km
		</Text>
	);
};

ServiceMileageCol.propTypes = {
	margin: PropTypes.string,
	service: PropTypes.object,
}; 