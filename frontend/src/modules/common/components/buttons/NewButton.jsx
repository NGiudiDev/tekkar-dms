import React from "react";
import PropTypes from "prop-types";

import { Button } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
	onClick: null,
};

export const NewButton = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Button margin={attrs.margin} onClick={attrs.onClick}>
			Nuevo
		</Button>
	);
};

NewButton.propTypes = {
	margin: PropTypes.string,
	onClick: PropTypes.func,
};