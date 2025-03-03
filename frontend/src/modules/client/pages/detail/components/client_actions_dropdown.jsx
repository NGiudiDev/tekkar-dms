import React from "react";

import { useClientDetailContext } from "../hooks/use_client_detail_context";

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