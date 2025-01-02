import { useContext } from "react";

import { CarDetailContext } from "../../pages/detail/CarDetailContext";

import { ActionsButton } from "../../../common/components";

import { Button } from "ds-loud-ng";

export const CarActionsDropdown = () => {
	const ctx = useContext(CarDetailContext);

	return (
		<ActionsButton>
			<Button 
				border={{ radius: "0px" }}
				fullWidth
				kind="text"
				onClick={ctx.handleCreateService}
			>
				Crear servicio
			</Button>
		</ActionsButton>
	);
};
