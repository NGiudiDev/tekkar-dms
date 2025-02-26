import React from "react";

import { ThreeColumnsGrid } from "../../../common/components";
import {
	NextServiceMileageInput,
	ServiceDescriptionInput,
	ServiceDurationInput,
	ServiceMileageInput,
	ServicePerformedAtInput,
	ServicePriceInput,
	ServiceTitleInput,
} from "../";

export const ServiceInformationForm = () => {
	return (
		<>
			<ThreeColumnsGrid.Grid>			
				<ThreeColumnsGrid.Row>
					<ServiceTitleInput margin="b-8" />
					<ServiceMileageInput margin="b-8" />
				</ThreeColumnsGrid.Row>

				<ThreeColumnsGrid.Row>
					<ServicePerformedAtInput margin="b-8" />
					<NextServiceMileageInput margin="b-8" />
				</ThreeColumnsGrid.Row>

				<ThreeColumnsGrid.Row>
					<ServicePriceInput margin="b-8" />
					<ServiceDurationInput margin="b-8" />
				</ThreeColumnsGrid.Row>
			</ThreeColumnsGrid.Grid>	

			<ServiceDescriptionInput />
		</>
	);
};