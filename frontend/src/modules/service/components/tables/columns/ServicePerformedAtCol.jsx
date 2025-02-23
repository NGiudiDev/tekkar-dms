import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

import { formatDate } from "../../../../common/utils/date.utils";

const DEFAULT_PROPS = {
	margin: "a-0",
	service: {},
};

export const ServicePerformedAtCol = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Text margin={attrs.margin}>
			{formatDate(attrs.service.performed_at)}
		</Text>
	);
};

ServicePerformedAtCol.propTypes = {
	margin: PropTypes.string,
	service: PropTypes.object,
}; 
