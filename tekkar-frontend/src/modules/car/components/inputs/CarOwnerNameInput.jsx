import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarOwnerNameInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Nombre del propietario"
			margin={attrs.margin}
			name="owner_name"
		/>
	);
};

CarOwnerNameInput.propTypes = {
	margin: PropTypes.string,
};
