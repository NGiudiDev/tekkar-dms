import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";
import { UserProfileImageInput } from "../../";

import { Styles } from "./UserInformationSection.styles";

const DEFAULT_PROPS = {
	user: {},
};

export const UserInformationSection = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Styles.Grid>
			<Styles.Row>
				<DataText
					margin="b-42"
					text={attrs.user.name}
					title="Nombre"
				/>

				<DataText
					margin="b-42"
					text={attrs.user.doc_number}
					title="Documento"
				/>
			</Styles.Row>

			<Styles.Row>
				<DataText
					margin="b-42"
					text={attrs.user.email}
					title="Email"
				/>

				<DataText
					margin="b-42"
					text={attrs.user.phone}
					title="Teléfono"
				/>
			</Styles.Row>

			<Styles.Row>
				<UserProfileImageInput user={attrs.user} />
			</Styles.Row>
		</Styles.Grid>
	);
};

UserInformationSection.propTypes = {
	user: PropTypes.object,
};
