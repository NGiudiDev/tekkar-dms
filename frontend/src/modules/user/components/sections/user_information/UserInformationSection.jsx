import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";

import { Image } from "ds-loud-ng";

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
				<Image img={attrs.user.profile_image_url} size="lg" type="round" />
			</Styles.Row>
		</Styles.Grid>
	);
};

UserInformationSection.propTypes = {
	user: PropTypes.object,
};
