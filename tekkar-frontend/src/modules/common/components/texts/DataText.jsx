import PropTypes from "prop-types";

import { Box, Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
	margin: "a-0",
	text: "",
	title: "",
};

export const DataText = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Box margin={attrs.margin}>
			<Text margin="b-4" type="bodySemibold">
				{attrs.title}
			</Text>

			<Text color="black_500" type="captionRegular">
				{attrs.text || "-"}
			</Text>
		</Box>
	);
};

DataText.propTypes = {
	margin: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string,
}; 
