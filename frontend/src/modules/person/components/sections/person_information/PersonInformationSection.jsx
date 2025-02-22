import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";
import { PersonImage } from "../../";

import { Styles } from "./PersonInformationSection.styles";

const DEFAULT_PROPS = {
	person: {},
};

export const PersonInformationSection = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<Styles.Grid>
			<Styles.Row>
				<DataText
					margin="b-42"
					text={attrs.person.name}
					title="Nombre"
				/>

				<DataText
					margin="b-42"
					text={attrs.person.doc_number}
					title="Documento"
				/>
			</Styles.Row>

			<Styles.Row>
				<DataText
					margin="b-42"
					text={attrs.person.email}
					title="Email"
				/>

				<DataText
					margin="b-42"
					text={attrs.person.phone}
					title="Teléfono"
				/>
			</Styles.Row>

			<Styles.Row>
				<PersonImage person={attrs.person} />
			</Styles.Row>
		</Styles.Grid>
	);
};

PersonInformationSection.propTypes = {
	person: PropTypes.object,
};
