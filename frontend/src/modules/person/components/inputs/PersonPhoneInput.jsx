import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const PersonPhoneInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Teléfono"
			margin={attrs.margin}
			name="phone"
		/>
	);
};

PersonPhoneInput.propTypes = {
	margin: PropTypes.string,
};