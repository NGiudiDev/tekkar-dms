import React from "react";
import PropTypes from "prop-types";

import { DetailPageContext } from "./hooks/useDetailPageContext";

const DEFAULT_PROPS = {
  children: <></>,
  context: {},
};

export const DetailPage = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <DetailPageContext.Provider value={attrs.context.value}>
      {attrs.children}
    </DetailPageContext.Provider>
  );
};

DetailPage.propTypes = {
  children: PropTypes.node,
  context: PropTypes.object,
};