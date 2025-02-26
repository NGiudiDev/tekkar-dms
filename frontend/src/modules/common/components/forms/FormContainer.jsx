import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./FormContainer.styles";

const DEFAULT_PROPS = {
	children: null,
};

export const FormContainer = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
  
	return (
		<Styles.Wrapper>
			{attrs.children}
		</Styles.Wrapper>
	);
};

FormContainer.propTypes = {
	children: PropTypes.node,
};