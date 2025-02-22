import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
};

//TODO: reemplazar por un select.
export const CarOwnerIdInput = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Input
			label="Id del propietario"
			margin={attrs.margin}
			name="owner_id"
		/>
	);
};

CarOwnerIdInput.propTypes = {
	margin: PropTypes.string,
};
