import PropTypes from "prop-types";

import { Input } from "ds-loud-ng";

const DEFAULT_PROPS = {
  margin: "a-0",
};

export const UserPasswordInput = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <Input
      label="Contraseña"
      margin={attrs.margin}
      name="password"
      type="password"
    />
  );
};

UserPasswordInput.propTypes = {
  margin: PropTypes.string,
};
