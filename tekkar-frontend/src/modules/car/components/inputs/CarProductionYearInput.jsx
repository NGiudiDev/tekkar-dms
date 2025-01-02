import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarProductionYearInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Año de fabricación"
			margin={attrs.margin}
			name="production_year"
			type="number"
		/>
	);
};

CarProductionYearInput.propTypes = {
	margin: PropTypes.string,
};
