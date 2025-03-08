import React from "react";

import { useUserDetailContext } from "../hooks/use_user_detail_context";

import { ActionsButton } from "@common/components";

import { Button } from "ds-loud-ng";

import { SET_USER_AS_CLIENT_MODAL_NAME } from "@user/constants/user_consts";

export const UserActionsDropdown = () => {
	const ctx = useUserDetailContext();

	if (ctx.user.person.roles.includes("client")) {
		return null;
	}

	return (
		<ActionsButton>
			<Button 
				border={{ radius: "0px" }}
				fullWidth
				kind="text"
				onClick={() => ctx.handleShowModal(SET_USER_AS_CLIENT_MODAL_NAME)}
			>
				Establecer como cliente
			</Button>
		</ActionsButton>
	);
};