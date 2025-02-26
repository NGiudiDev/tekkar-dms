import React from "react";
import PropTypes from "prop-types";

import { DataText, ThreeColumnsGrid } from "../../../common/components";

export const CarInformationSection = (props) => {
  const { car } = props;

  return (
    <ThreeColumnsGrid.Grid>
      <ThreeColumnsGrid.Row>
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
      </ThreeColumnsGrid.Row>

      <ThreeColumnsGrid.Row>
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
      </ThreeColumnsGrid.Row>
    </ThreeColumnsGrid.Grid>
  );
};

CarInformationSection.propTypes = {
  car: PropTypes.object,
};