import {
	NextServiceMileageInput,
	ServiceDescriptionInput,
	ServiceDurationInput,
	ServiceMileageInput,
	ServicePerformedAtInput,
	ServicePriceInput,
	ServiceTitleInput,
} from "../";

import { Styles } from "./ServiceInformationForm.styles";

export const ServiceInformationForm = () => {
	return (
		<>
			<Styles.Grid>			
				<Styles.Row>
					<ServiceTitleInput margin="b-8" />
					<ServiceMileageInput margin="b-8" />
				</Styles.Row>

				<Styles.Row>
					<ServicePerformedAtInput margin="b-8" />
					<NextServiceMileageInput margin="b-8" />
				</Styles.Row>

				<Styles.Row>
					<ServicePriceInput margin="b-8" />
					<ServiceDurationInput margin="b-8" />
				</Styles.Row>
			</Styles.Grid>	

			<ServiceDescriptionInput />
		</>
	);
};
