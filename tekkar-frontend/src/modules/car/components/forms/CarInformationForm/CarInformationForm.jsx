import {
	CarBrandInput,
	CarLicensePlateInput,
  CarModelInput,
	CarProductionYearInput
} from "../..";

import { Styles } from "./CarInformationForm.styles";

export const CarInformationForm = () => {
	return (
		<Styles.Grid>			
			<Styles.Row>
				<CarBrandInput margin="b-8" />
				<CarLicensePlateInput margin="b-8" />
			</Styles.Row>

			<Styles.Row>
				<CarModelInput margin="b-8" />
				<CarProductionYearInput margin="b-8" />
			</Styles.Row>
		</Styles.Grid>	
	);
};
