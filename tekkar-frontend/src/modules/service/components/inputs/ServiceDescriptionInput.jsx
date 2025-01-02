import PropTypes from "prop-types";

import { TextArea } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const ServiceDescriptionInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<TextArea
			label="Descripción"
			margin={attrs.margin}
			name="description"
			rows={15}
		/>
	);
};

ServiceDescriptionInput.propTypes = {
	margin: PropTypes.string,
};
