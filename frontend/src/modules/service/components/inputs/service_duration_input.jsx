import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServiceDurationInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Duración del servicio"
			margin={attrs.margin}
			name="service_duration"
		/>
	);
};

ServiceDurationInput.propTypes = {
	margin: PropTypes.string,
};