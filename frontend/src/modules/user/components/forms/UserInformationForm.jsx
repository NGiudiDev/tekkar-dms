import {
	UserDocNumberInput,
	UserEmailInput,
	UserNameInput,
	UserPhoneInput,
} from "..";

import { Styles } from "./UserInformationForm.styles";

export const UserInformationForm = () => {
	return (
		<Styles.Grid>			
			<Styles.Row>
				<UserNameInput margin="b-8" />
				<UserDocNumberInput margin="b-8" />
			</Styles.Row>

			<Styles.Row>
				<UserEmailInput margin="b-8" />
				<UserPhoneInput margin="b-8" />
			</Styles.Row>

			<Styles.Row />
		</Styles.Grid>	
	);
};
