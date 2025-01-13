import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	car: {},
	margin: "a-0",
};

export const CarOwnerTC = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin}>
			{attrs.car.owner_name}
		</Text>
	);
};

CarOwnerTC.propTypes = {
	car: PropTypes.object,
	margin: PropTypes.string,
}; 
