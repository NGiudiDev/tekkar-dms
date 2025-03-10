import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const PersonNameInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Nombre"
			margin={attrs.margin}
			name="name"
		/>
	);
};

PersonNameInput.propTypes = {
	margin: PropTypes.string,
};