import React from "react";
import { PageMessageLayout } from "../..";

import { Styles } from "./not_found_message_layout_styles";

export const NotFoundMessageLayout = () => {  
	return (
		<Styles.Wrapper>
			<PageMessageLayout
				description="La página que estás buscando no existe"
				title="Página no encontrada"
			/>
		</Styles.Wrapper>
		
	);
};