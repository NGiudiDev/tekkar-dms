import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { CarInformationSection } from "../../car/components";
import { 
	ServiceReportForm,
	ServiceReportInformationSection,
	ServiceReportLayout,
} from "../components";

import { Button, Divider, Flex, Text } from "ds-loud-ng";

import { getServiceReportPage } from "../services/service_report.services";

const ServiceReportPage = () => {
  const [car, setCar] = useState(null);
  const [services, setServices] = useState([]);
	const [pagination, setPagination] = useState(null);

	const servicesMutation =  useMutation({
		mutationFn: (params) => getServiceReportPage(params),
		onSuccess: (data) => {
			const { car, services } = data;
			
			//? set car information.
			setCar(car);

			//? set services information.
			setPagination(services.pagination);
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
			page: pagination.page + 1,
		};

		servicesMutation.mutate(params);
	};

  return (
    <ServiceReportLayout>
      <ServiceReportForm onSubmit={handleFormSubmit} />
			
			{car && (
				<>
					<Text margin="y-24" type="title">
						Datos del vehículo
					</Text>

					<CarInformationSection car={car}/>

					<Divider color="black_400" margin="y-24"/>
				</>
			)}

			{services.length > 0 && (
				<>
					<Text margin="b-24" type="title">
						Historial de servicios
					</Text>

					<div style={{ margin: "0 16px" }}>
						{services?.map((service, idx) => {
							const isLastItem = idx === services.length - 1;

							return (
								<React.Fragment key={`service_${idx}`}>
									<ServiceReportInformationSection service={service} />

									{!isLastItem && <Divider margin="y-16" />}
								</React.Fragment>
							);
						})}
					</div>
				</>
			)}
			
			{pagination && pagination.page < pagination.pages && (
				<Flex hAlign="end" margin="t-24 r-16">
					<Button
						kind="outlined"
						loading={servicesMutation.isLoading}
						onClick={handleMoreServices}
					>
						Cargar más
					</Button>
				</Flex>
				
			)}
    </ServiceReportLayout>
  );
};

export default ServiceReportPage;