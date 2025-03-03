import React from "react";
import PropTypes from "prop-types";

import { DataText, ThreeColumnsGrid } from "@common/components";
import { EditablePersonImage, PersonImage } from "../";

import { Flex } from "ds-loud-ng";

const DEFAULT_PROPS = {
	onImageChange: null,
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
				<Flex hAlign="center" margin="t-24">
					{attrs.onImageChange !== null ? (
						<EditablePersonImage
							onImageChange={attrs.onImageChange}
							person={attrs.person}
						/>
					) : (
						<PersonImage person={attrs.person} />
					)}
				</Flex>
			</ThreeColumnsGrid.Row>
		</ThreeColumnsGrid.Grid>
	);
};

PersonInformationSection.propTypes = {
	onImageChange: PropTypes.func,
	person: PropTypes.object,
};