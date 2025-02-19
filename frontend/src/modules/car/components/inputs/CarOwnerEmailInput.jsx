import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
};

export const CarOwnerEmailInput = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Input
      label="Email del propietario"
      margin={attrs.margin}
      name="owner_email"
    />
  );
};

CarOwnerEmailInput.propTypes = {
  margin: PropTypes.string,
};
