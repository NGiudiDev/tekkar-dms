import React from "react";

import { useRouter } from "../../../../hooks";
import { useSelector } from "react-redux";

import { Button } from "ds-loud-ng";

import { PATH } from "../../../../router/constants/routes.consts";

export const ProfileButton = () => {
	const user = useSelector(state => state.user);
	const router = useRouter();

	const handleClick = () => {
		router.push(`${PATH.users}/${user.id}`);
	};

	return (
		<Button 
			border={{ radius: "0px" }}
			fullWidth
			kind="text"
			onClick={handleClick}
		>
			Datos personales
		</Button>
	);
};