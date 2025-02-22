import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	car: {},
	margin: "a-0",
};

export const CarDescriptionCol = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin} type="captionRegular">
			{`${attrs.car.brand} ${attrs.car.model}`}
		</Text>
	);
};

CarDescriptionCol.propTypes = {
	car: PropTypes.object,
	margin: PropTypes.string,
}; 
