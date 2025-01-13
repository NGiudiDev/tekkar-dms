import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServicePerformedAtInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Realizado el"
			margin={attrs.margin}
			name="performed_at"
		/>
	);
};

ServicePerformedAtInput.propTypes = {
	margin: PropTypes.string,
};
