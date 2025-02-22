import { ThreeColumnsGrid } from "../../../common/components";
import {
	CarBrandInput,
	CarLicensePlateInput,
  CarModelInput,
	CarProductionYearInput
} from "..";

export const CarInformationForm = () => {
	return (
		<ThreeColumnsGrid.Grid>			
			<ThreeColumnsGrid.Row>
				<CarBrandInput margin="b-8" />
				<CarLicensePlateInput margin="b-8" />
			</ThreeColumnsGrid.Row>

			<ThreeColumnsGrid.Row>
				<CarModelInput margin="b-8" />
				<CarProductionYearInput margin="b-8" />
			</ThreeColumnsGrid.Row>
		</ThreeColumnsGrid.Grid>	
	);
};
