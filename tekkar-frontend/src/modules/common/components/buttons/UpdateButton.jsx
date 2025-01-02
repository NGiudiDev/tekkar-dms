import PropTypes from "prop-types";

import { Button } from "ds-loud-ng";

const DEFAULT_PROPS = {
	disabled: false,
	margin: "a-0",
	onClick: null,
};

export const UpdateButton = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Button 
			disabled={attrs.disabled}
			margin={attrs.margin}
			onClick={attrs.onClick}
			type="submit"
		>
			Actualizar
		</Button>
	);
};

UpdateButton.propTypes = {
	disabled: PropTypes.bool,
	margin: PropTypes.string,
	onClick: PropTypes.func,
};
