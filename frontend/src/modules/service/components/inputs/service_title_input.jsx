import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServiceTitleInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Título"
			margin={attrs.margin}
			name="title"
		/>
	);
};

ServiceTitleInput.propTypes = {
	margin: PropTypes.string,
};