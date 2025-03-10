import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const PersonEmailInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Email"
			margin={attrs.margin}
			name="email"
		/>
	);
};

PersonEmailInput.propTypes = {
	margin: PropTypes.string,
};