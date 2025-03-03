import React from "react";

import { useClientDetailContext } from "../hooksuse_client_detail_contextext";

import { ActionsButton } from "@common/components";

import { Button } from "ds-loud-ng";

export const ClientActionsDropdown = () => {
	const ctx = useClientDetailContext();

	return (
		<ActionsButton>
			<Button 
				border={{ radius: "0px" }}
				fullWidth
				kind="text"
				onClick={ctx.handleCreateCar}
			>
				Agregar vehículo
			</Button>
		</ActionsButton>
	);
};