import React from "react";

import { ThreeColumnsGrid } from "../../../common/components";
import {
	UserDocNumberInput,
	UserEmailInput,
	UserNameInput,
	UserPhoneInput,
} from "..";

export const UserInformationForm = () => {
	return (
		<ThreeColumnsGrid.Grid>			
			<ThreeColumnsGrid.Row>
				<UserNameInput margin="b-8" />
				<UserDocNumberInput margin="b-8" />
			</ThreeColumnsGrid.Row>

			<ThreeColumnsGrid.Row>
				<UserEmailInput margin="b-8" />
				<UserPhoneInput margin="b-8" />
			</ThreeColumnsGrid.Row>

			<ThreeColumnsGrid.Row />
		</ThreeColumnsGrid.Grid>	
	);
};