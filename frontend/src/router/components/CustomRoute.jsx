import PropTypes from "prop-types";

import { useSidebarButtons } from "../../hooks/useSidebarButtons";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { ProfileAvatar } from "../../modules/common/components";

import { AppLayout } from "ds-loud-ng";

import { PATH } from "../constants/routes.consts";

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
	const sbButtons = useSidebarButtons();

	//? user not logged in
	if (attrs.isPrivated && !isLogged) {
		return <Navigate to={PATH.login} />;
	}

	//? success
	//TODO: agregar la foto del avatar en el DS.
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

CustomRoute.propTypes = {
	children: PropTypes.node,
	isPrivated: PropTypes.bool,
	useAppLayout: PropTypes.bool,
};
