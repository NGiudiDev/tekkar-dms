import React from "react";

import { useCarDetailContext } from "../hooks/use_car_detail_context";

import { ActionsButton } from "@common/components";

import { Button } from "ds-loud-ng";

export const CarActionsDropdown = () => {
	const ctx = useCarDetailContext();

	return (
		<ActionsButton>
			<Button 
				border={{ radius: "0px" }}
				fullWidth
				kind="text"
				onClick={ctx.handleCreateService}
			>
				Agregar servicio
			</Button>
		</ActionsButton>
	);
};