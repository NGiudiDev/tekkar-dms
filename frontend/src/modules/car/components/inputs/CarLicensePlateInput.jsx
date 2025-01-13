import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarLicensePlateInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Patente"
			margin={attrs.margin}
			name="license_plate"
		/>
	);
};

CarLicensePlateInput.propTypes = {
	margin: PropTypes.string,
};
