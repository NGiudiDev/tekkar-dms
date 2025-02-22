import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	car: {},
	margin: "a-0",
};

export const CarBrandCol = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin}>
			{attrs.car.brand}
		</Text>
	);
};

CarBrandCol.propTypes = {
	car: PropTypes.object,
	margin: PropTypes.string,
}; 
