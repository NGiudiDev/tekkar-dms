import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarModelInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Modelo"
			margin={attrs.margin}
			name="model"
		/>
	);
};

CarModelInput.propTypes = {
	margin: PropTypes.string,
};