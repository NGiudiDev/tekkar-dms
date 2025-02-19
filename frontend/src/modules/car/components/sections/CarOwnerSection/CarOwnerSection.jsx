import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";

import { Styles } from "./CarOwnerSection.styles";

export const CarOwnerSection = (props) => {
  const { car } = props;

  return (
    <Styles.Grid>
      <Styles.Row>
        <DataText 
          margin="b-42"
          text={car.owner_name}
          title="Nombre"
        />

        <DataText 
          margin="b-42"
          text={car.owner_phone}
          title="Teléfono"
        />
      </Styles.Row>

      <Styles.Row>
        <DataText 
          margin="b-42"
          text={car.owner_doc_number}
          title="Documento"
        />

        <DataText 
          margin="b-42"
          text={car.owner_email}
          title="Email del propietario"
        />
      </Styles.Row>
    </Styles.Grid>
  );
};

CarOwnerSection.propTypes = {
  car: PropTypes.object,
};
