import React from "react";
import PropTypes from "prop-types";

import { Styles } from "./ServiceReportLayout.styles";

const DEFAULT_PROPS = {
  children: null,
  topbar: null,
};

export const ServiceReportLayout = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <>
      <Styles.TopbarWrapper>
        {attrs.topbar}
      </Styles.TopbarWrapper>

      <Styles.ContentWrapper>
        {attrs.children}
      </Styles.ContentWrapper>
    </>
  );
};

ServiceReportLayout.propTypes = {
  children: PropTypes.node,
  topbar: PropTypes.node,
};