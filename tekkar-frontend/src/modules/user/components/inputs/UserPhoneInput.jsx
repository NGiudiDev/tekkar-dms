import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const UserPhoneInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Teléfono"
			margin={attrs.margin}
			name="phone"
		/>
	);
};

UserPhoneInput.propTypes = {
	margin: PropTypes.string,
};
