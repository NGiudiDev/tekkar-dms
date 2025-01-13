import { PageMessageLayout } from "../..";

import { Styles } from "./NotFoundMessageLayout.styles";

export const NotFoundMessageLayout = () => {  
	return (
		<Styles.Wrapper>
			<PageMessageLayout
				description="La página que estás buscando no existe"
				isFullScreen
				title="Página no encontrada"
			/>
		</Styles.Wrapper>
		
	);
};
