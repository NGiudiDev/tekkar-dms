import React from "react";
import PropTypes from "prop-types";

import { Icon } from "ds-loud-ng";

import { Styles } from "./page_loading_layout_styles";

const DEFAULT_PROPS = {
	isFullHeight: false,
};

export const PageLoadingLayout = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Styles.Wrapper $isFullHeight={attrs.isFullHeight}>
			<Icon icon="spinner" size="xl" spin />
		</Styles.Wrapper>
	);
};

PageLoadingLayout.propTypes = {
	isFullHeight: PropTypes.bool,
};