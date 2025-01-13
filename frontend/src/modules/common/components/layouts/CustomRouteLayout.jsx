import PropTypes from "prop-types";

import { useSidebarButtons } from "../../hooks/useSidebarButtons";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { ProfileAvatar } from "../";

import { AppLayout } from "ds-loud-ng";

import { PATH } from "../../constants/routes.consts";

const DEFAULT_PROPS = {
	children: null,
	isPrivated: true,
	useAppLayout: false,
};

export const CustomRouteLayout = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const isLogged = useSelector(state => state.isLogged);
	const sbButtons = useSidebarButtons();

	//? user not logged in
	if (attrs.isPrivated && !isLogged) {
		return <Navigate to={PATH.login} />;
	}

	//? success
	if (attrs.useAppLayout) {
		const topbar = {
			avatarPanel: <ProfileAvatar />,
		};

		return (
			<AppLayout sidebar={sbButtons} topbar={topbar}>
				{attrs.children}
			</AppLayout>
		);
	}

	return attrs.children;
};

CustomRouteLayout.propTypes = {
	children: PropTypes.node,
	isPrivated: PropTypes.bool,
	useAppLayout: PropTypes.bool,
};
