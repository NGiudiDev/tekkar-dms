import PropTypes from "prop-types";

import { Columns, Text } from "ds-loud-ng";

import { formatDate } from "../../../common/utils/date.utils";

export const ServiceReportInformationSection = (props) => {
  const { service } = props;

  return (
    <>
      <Text color="black_400" type="captionRegular">
        {formatDate(service.performed_at)}
      </Text>
      
      <Text margin="b-8" type="subtitle">
        {service.title}
      </Text>

      <Text>
        {service.description}
      </Text>

      <Columns margin="t-24">
        <Text>
         Kilometraje: {service.service_mileage} 
        </Text>

        <Text>
          Próximo servicio: {service.next_service_mileage}
        </Text>
      </Columns>
    </>
  );
}

ServiceReportInformationSection.propTypes = {
  service: PropTypes.object,
};
