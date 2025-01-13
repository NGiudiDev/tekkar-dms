import PropTypes from "prop-types";

import { DataText } from "../../../../common/components";

import { Styles } from "./CarInformationSection.styles";

export const CarInformationSection = (props) => {
  const { car } = props;

  return (
    <Styles.Grid>
      <Styles.Row>
        <DataText 
          margin="b-42"
          text={car.brand}
          title="Marca"
        />

        <DataText 
          margin="b-42"
          text={car.license_plate}
          title="Patente"
        />
      </Styles.Row>

      <Styles.Row>
        <DataText 
          margin="b-42"
          text={car.model}
          title="Modelo"
        />
        
        <DataText 
          margin="b-42"
          text={car.production_year}
          title="Año de producción"
        />
      </Styles.Row>
    </Styles.Grid>
  );
};

CarInformationSection.propTypes = {
  car: PropTypes.object,
};
