import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";

import { formatDate } from "../../../../common/utils/forms.utils";

import { Styles } from "./ServiceInformationSection.styles";

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
			<Styles.Grid>
				<Styles.Row>
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
				</Styles.Row>

				<Styles.Row>
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
				</Styles.Row>

				<Styles.Row>
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
				</Styles.Row>
			</Styles.Grid>

			<DataText
				margin="b-42"
				text={props.service.description || "-"}
				title="Descripción"
			/>
		</>
	);
};

ServiceInformationSection.propTypes = {
	service: PropTypes.object,
};
