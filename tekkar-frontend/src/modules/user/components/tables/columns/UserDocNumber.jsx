import PropTypes from "prop-types";

import { Text } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
  user: {},
};

export const UserDocNumber = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Text margin={attrs.margin}>
      {attrs.user.doc_number}
    </Text>
  );
};

UserDocNumber.propTypes = {
  margin: PropTypes.string,
  user: PropTypes.object,
}; 
