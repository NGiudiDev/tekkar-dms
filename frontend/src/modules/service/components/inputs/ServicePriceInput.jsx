import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServicePriceInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Precio"
			margin={attrs.margin}
			name="price"
		/>
	);
};

ServicePriceInput.propTypes = {
	margin: PropTypes.string,
};
