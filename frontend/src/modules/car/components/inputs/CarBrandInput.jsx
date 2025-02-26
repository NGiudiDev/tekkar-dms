import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarBrandInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Marca"
			margin={attrs.margin}
			name="brand"
		/>
	);
};

CarBrandInput.propTypes = {
	margin: PropTypes.string,
};