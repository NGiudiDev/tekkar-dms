import React from "react";
import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
  person: {},
};

export const PersonDocNumberCol = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Text margin={attrs.margin}>
      {attrs.person.doc_number}
    </Text>
  );
};

PersonDocNumberCol.propTypes = {
  margin: PropTypes.string,
  person: PropTypes.object,
}; 