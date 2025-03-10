import React from "react";

import { Image } from "ds-loud-ng";

const DEFAULT_PROPS = {
  person: {}
};

export const PersonImage = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props
  };

  return (
    <Image src={attrs.person.image_url} size="lg" type="round" />
  );
};