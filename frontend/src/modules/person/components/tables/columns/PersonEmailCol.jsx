import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
  person: {},
};

export const PersonEmailCol = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Text margin={attrs.margin}>
      {attrs.person.email}
    </Text>
  );
};

PersonEmailCol.propTypes = {
  margin: PropTypes.string,
  person: PropTypes.object,
}; 
