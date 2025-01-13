import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const NextServiceMileageInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Próximo servicio"
			margin={attrs.margin}
			name="next_service_mileage"
		/>
	);
};

NextServiceMileageInput.propTypes = {
	margin: PropTypes.string,
};
