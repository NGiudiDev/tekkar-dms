import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
	service: {},
};

export const ServiceTitleCol = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin}>
			{attrs.service.title}
		</Text>
	);
};

ServiceTitleCol.propTypes = {
	margin: PropTypes.string,
	service: PropTypes.object,
}; 
