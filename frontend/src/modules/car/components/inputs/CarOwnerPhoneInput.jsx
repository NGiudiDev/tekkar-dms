import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

export const CarOwnerPhoneInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Telefono del propietario"
			margin={attrs.margin}
			name="owner_phone"
		/>
	);
};

CarOwnerPhoneInput.propTypes = {
	margin: PropTypes.string,
};
