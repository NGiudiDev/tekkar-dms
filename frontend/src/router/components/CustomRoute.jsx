import React from "react";
import PropTypes from "prop-types";

import { useSidebarButtons } from "@hooks";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { ProfileAvatar } from "@common/components";

import { AppLayout } from "ds-loud-ng";

import { PATH } from "@router/constants/routes.consts";

const DEFAULT_PROPS = {
	children: null,
	isPrivated: true,
	useAppLayout: false,
};

export const CustomRoute = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const isLogged = useSelector(state => state.isLogged);
	const user = useSelector(state => state.user);
	const sbButtons = useSidebarButtons();

	//? user not logged in
	if (attrs.isPrivated && !isLogged) {
		return <Navigate to={PATH.login} />;
	}

	//? success
	if (attrs.useAppLayout) {
		const topbar = {
			avatarProps: {
				children: <ProfileAvatar />,
				imageProps: {
					src: user.person.image_url,
					alt: "user-profile-topbar"
				}
			},
		};

		return (
			<AppLayout sidebar={sbButtons} topbar={topbar}>
				{attrs.children}
			</AppLayout>
		);
	}

	return attrs.children;
};

CustomRoute.propTypes = {
	children: PropTypes.node,
	isPrivated: PropTypes.bool,
	useAppLayout: PropTypes.bool,
};