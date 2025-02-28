import React, { useState } from "react";
import PropTypes from "prop-types";

import { ServiceReportDetailContext } from "./hooks/useServiceReportDetailContext";

import { useMutation } from "@tanstack/react-query";

import { getServiceReportPage } from "@service_report/services/service_report.services";

const DEFAULT_PROPS = {
	children: null,
};

export const ServiceReportDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

  const [car, setCar] = useState(null);
  const [services, setServices] = useState([]);
  const [servicesPagination, setServicesPagination] = useState(null);

  const servicesMutation =  useMutation({
    mutationFn: (params) => getServiceReportPage(params),
    onSuccess: (data) => {
      const { car, services } = data;
      
      //? set car information.
      setCar(car);

      //? set services information.
      setServicesPagination(services.pagination);
      setServices((prevList) => {
        if (services.pagination.page === 1) {
          //? click on "Buscar" button
          return [...services.list];
        } else {
          //? click on "Cargar más" button
          return [...prevList, ...services.list];
        }
      });
    },
  });

  const handleFormSubmit = (data) => {
    servicesMutation.mutate(data);
  };

  const handleMoreServices = () => {
    const params = {
      license_plate: car.license_plate,
      owner_doc_number: car.person.doc_number,
      page: servicesPagination.page + 1,
    };

    servicesMutation.mutate(params);
  };

	const valueObj = {
		car,
    handleFormSubmit,
    handleMoreServices,
    isLoadingServices: servicesMutation.isLoading,
    services,
    servicesPagination,
	};

	return (
		<ServiceReportDetailContext.Provider value={valueObj}>
			{attrs.children}
		</ServiceReportDetailContext.Provider>
	);
};

ServiceReportDetailProvider.propTypes = {
	children: PropTypes.node,
};