import PropTypes from "prop-types";

import { DataText, ThreeColumnsGrid } from "../../../common/components";
import { EditablePersonImage, PersonImage } from "../";

const DEFAULT_PROPS = {
	isImageEditable: false,
	person: {},
};

export const PersonInformationSection = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<ThreeColumnsGrid.Grid>
			<ThreeColumnsGrid.Row>
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
			</ThreeColumnsGrid.Row>

			<ThreeColumnsGrid.Row>
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
			</ThreeColumnsGrid.Row>

			<ThreeColumnsGrid.Row>
				{attrs.isImageEditable ? (
					<EditablePersonImage person={attrs.person} />
				) : (
					<PersonImage person={attrs.person} />
				)}
			</ThreeColumnsGrid.Row>
		</ThreeColumnsGrid.Grid>
	);
};

PersonInformationSection.propTypes = {
	isImageEditable: PropTypes.bool,
	person: PropTypes.object,
};
