import PropTypes from "prop-types";

import { CarCreateContext } from "./hoooks/useCarCreateContext"; 

const DEFAULT_PROPS = {
	children: null,
};

export const CarCreateProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const valueObj = {};

	return (
		<CarCreateContext.Provider value={valueObj}>
			{attrs.children}
		</CarCreateContext.Provider>
	);
};

CarCreateProvider.propTypes = {
	children: PropTypes.node,
};
