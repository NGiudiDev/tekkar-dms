import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./session_layout_styles";

const DEFAULT_PROPS = {
  children: null,
};

export const SessionLayout = (props) => {
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

SessionLayout.propTypes = {
  children: PropTypes.node,
};