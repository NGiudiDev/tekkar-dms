import React from "react";
import PropTypes from "prop-types";

import { Image } from "ds-loud-ng";

const DEFAULT_PROPS = {
	person: {},
};

export const PersonImageCol = (props) => {
  const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

  return (
    <Image
      src={attrs.person.image_url}
      size="avatar"
      type="round"
    />
  );
};

PersonImageCol.propTypes = {
  person: PropTypes.object,
};