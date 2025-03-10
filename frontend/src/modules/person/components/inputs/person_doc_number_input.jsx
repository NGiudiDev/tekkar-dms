import React from "react";
import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const PersonDocNumberInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Documento"
			margin={attrs.margin}
			name="doc_number"
		/>
	);
};

PersonDocNumberInput.propTypes = {
	margin: PropTypes.string,
};