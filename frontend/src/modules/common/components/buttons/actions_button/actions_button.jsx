import React, { useState } from "react";
import PropTypes from "prop-types";

import { useOuterClick } from "@hooks";

import { IconButton, Panel } from "ds-loud-ng";

import { Styles } from "./actions_button_styles";

const DEFAULT_PROPS = {
	children: null,
};

export const ActionsButton = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const [isOpen, setIsOpen] = useState(false);
	
	const innerRef = useOuterClick(() => {
		setIsOpen(false);
	});

	const handleClick = () => {
		setIsOpen((prevValue) => !prevValue);
	};

	return (
		<Styles.Wrapper ref={innerRef}>
			<IconButton
				icon={{ icon: "ellipsis" }}
				margin="r-8"
				onClick={handleClick}
			/>
			
			{isOpen && (
				<Styles.Panel>
					<Panel padding="a-0">
						{attrs.children}
					</Panel>
				</Styles.Panel>
			)}
		</Styles.Wrapper>
	);
};

ActionsButton.propTypes = {
	children: PropTypes.node,
};