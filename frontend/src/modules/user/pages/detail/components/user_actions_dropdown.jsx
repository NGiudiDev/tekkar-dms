import React from "react";

import { useUserDetailContext } from "../hooks/use_user_detail_context";

import { ActionsButton } from "@common/components";

import { Button } from "ds-loud-ng";

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
				onClick={() => ctx.handleShowModal("setUserAsClient")}
			>
				Establecer como cliente
			</Button>
		</ActionsButton>
	);
};