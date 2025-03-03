import React from "react";
import PropTypes from "prop-types";

import { DataText, ThreeColumnsGrid } from "@common/components";

import { formatDate } from "@common/utils/date_utils";

import { Styles } from "./service_information_section_styles";

const DEFAULT_PROPS = {
	service: {},
};

export const ServiceInformationSection = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	return (
		<>
			<ThreeColumnsGrid.Grid>
				<ThreeColumnsGrid.Row>
					<DataText
						margin="b-42"
						text={attrs.service.title}
						title="Título"
					/>

					<DataText
						margin="b-42"
						text={props.service.service_mileage}
						title="Kilometraje"
					/>
				</ThreeColumnsGrid.Row>

				<ThreeColumnsGrid.Row>
					<DataText
						margin="b-42"
						text={formatDate(props.service.performed_at)}
						title="Realizado el"
					/>

					<DataText
						margin="b-42"
						text={props.service.next_service_mileage}
						title="Próximo servicio"
					/>
				</ThreeColumnsGrid.Row>

				<ThreeColumnsGrid.Row>
					<DataText
						margin="b-42"
						text={props.service.price || "-"}
						title="Precio"
					/>

					<DataText
						margin="b-42"
						text={`${props.service.service_duration} meses`}
						title="Duración del servicio"
					/>
				</ThreeColumnsGrid.Row>
			</ThreeColumnsGrid.Grid>

			<Styles.DescriptionWrapper>
				<DataText
					margin="b-42"
					text={props.service.description || "-"}
					title="Descripción"
				/>
			</Styles.DescriptionWrapper>
		</>
	);
};

ServiceInformationSection.propTypes = {
	service: PropTypes.object,
};