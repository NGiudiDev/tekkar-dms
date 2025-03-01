import React from "react";

import { ThreeColumnsGrid } from "@common/components";
import {
  PersonDocNumberInput,
  PersonEmailInput,
  PersonNameInput,
  PersonPhoneInput,
} from "@person/components";

export const PersonInformationForm = () => {
  return (
    <ThreeColumnsGrid.Grid>			
      <ThreeColumnsGrid.Row>
        <PersonNameInput margin="b-8" />
        <PersonDocNumberInput margin="b-8" />
      </ThreeColumnsGrid.Row>

      <ThreeColumnsGrid.Row>
        <PersonEmailInput margin="b-8" />
        <PersonPhoneInput margin="b-8" />
      </ThreeColumnsGrid.Row>

      <ThreeColumnsGrid.Row />
    </ThreeColumnsGrid.Grid>	
  );
};