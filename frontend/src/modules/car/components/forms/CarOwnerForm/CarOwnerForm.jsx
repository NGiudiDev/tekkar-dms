import {
	CarOwnerDocNumberInput,
	CarOwnerEmailInput,
	CarOwnerNameInput,
	CarOwnerPhoneInput,
} from "../..";

import { Styles } from "./CarOwnerForm.styles";

export const CarOwnerForm = () => {
	return (
		<Styles.Grid>			
			<Styles.Row>
				<CarOwnerNameInput margin="b-8" />
				<CarOwnerPhoneInput margin="b-8" />
			</Styles.Row>

			<Styles.Row>
				<CarOwnerDocNumberInput margin="b-8" />
				<CarOwnerEmailInput margin="b-8" />
			</Styles.Row>
		</Styles.Grid>	
	);
};
