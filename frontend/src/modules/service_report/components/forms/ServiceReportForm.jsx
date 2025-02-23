import PropTypes from "prop-types";

import { Form, Formik } from "formik";

import { Button, Columns, Input } from "ds-loud-ng";

import { serviceReportYupSchema } from "../../services/service_report.validations";

export const ServiceReportForm = (props) => {
  const { onSubmit } = props;

  return (
    <Formik
      initialValues={{
        license_plate: "",
        owner_doc_number: "",
      }}
      onSubmit={onSubmit}
      validationSchema={serviceReportYupSchema}
    >
      <Form>
        <Columns>
          <Input label="Patente" name="license_plate" />
        
          <Input label="Documento" name="owner_doc_number" />
          
          <Button fullWidth margin="t-16" type="submit">
            Buscar
          </Button>
        </Columns>
      </Form>
    </Formik>
  );
};

ServiceReportForm.propTypes = {
  onSubmit: PropTypes.func,
};