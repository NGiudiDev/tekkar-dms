import React from "react";

import { Button, Columns, Input } from "ds-loud-ng";

export const ServiceReportForm = () => {
  return (
    <Columns>
      <Input label="Patente" name="license_plate" />
    
      <Input label="Documento" name="owner_doc_number" />
      
      <Button fullWidth margin="t-16" type="submit">
        Buscar
      </Button>
    </Columns>
  );
};