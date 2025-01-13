import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
  user: {},
};

export const UserName = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Text margin={attrs.margin}>
      {attrs.user.name}
    </Text>
  );
};

UserName.propTypes = {
  margin: PropTypes.string,
  user: PropTypes.object,
}; 
