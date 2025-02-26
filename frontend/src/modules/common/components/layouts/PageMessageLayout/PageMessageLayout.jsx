import React from "react";
import PropTypes from "prop-types";

import { Button, Text } from "ds-loud-ng";

import { Styles } from "./PageMessageLayout.styles";

const DEFAULT_PROPS = {
	button: null,
	description: "",
	isFullScreen: false,
	title: "Hubo un error",
};

export const PageMessageLayout = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Styles.Wrapper $isFullScreen={attrs.isFullScreen}>
			<Text margin="b-8" type="subtitle">
				{attrs.title}
			</Text>

			{props.description && (
				<Styles.TextWrapper>
					<Text align="center">
						{attrs.description}
					</Text>
				</Styles.TextWrapper>
			)}

			{props.button && (
				<Button margin="t-16" {...attrs.button} />
			)}
		</Styles.Wrapper>
	);
};

PageMessageLayout.propTypes = {
	button: PropTypes.object,
	description: PropTypes.string,
	isFullScreen: PropTypes.bool,
	title: PropTypes.string.isRequired,
};