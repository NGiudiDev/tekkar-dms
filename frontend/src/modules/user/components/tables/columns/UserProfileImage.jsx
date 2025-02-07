import PropTypes from "prop-types";

import { Image } from "ds-loud-ng";

const DEFAULT_PROPS = {
	user: {},
};

export const UserProfileImage = (props) => {
  const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

  return (
    <Image
      img={attrs.user.profile_image_url}
      size="avatar"
      type="round"
    />
  );
};

UserProfileImage.propTypes = {
  user: PropTypes.object,
};
