import { useCarDetailContext } from "../hooks/useCarDetailContext";

import { ActionsButton } from "../../../../common/components";

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
