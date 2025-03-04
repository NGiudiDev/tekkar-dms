import React from "react";

import { useServiceReportDetailContext } from"./hooks/use_service_report_detail_context";

import { CarInformationSection } from "@car/components";
import { Form, Formik } from "formik";
import { 
	ServiceReportForm,
	ServiceReportInformationSection,
	ServiceReportLayout,
} from "@service_report/components";

import { Button, Divider, Flex, Text } from "ds-loud-ng";

import { serviceReportSchema } from "@service_report/services/service_report_validations_services";

export const ServiceReportDetailContent = () => {
  const ctx = useServiceReportDetailContext();

  return (
    <ServiceReportLayout>
			<Formik
				initialValues={{
					license_plate: "",
					owner_doc_number: "",
				}}
				onSubmit={ctx.handleFormSubmit}
				validationSchema={serviceReportSchema}
			>
				<Form>
					<ServiceReportForm />
				</Form>
			</Formik>
      
			{ctx.car && (
				<>
					<Text margin="y-24" type="title">
						Datos del vehículo
					</Text>

					<CarInformationSection car={ctx.car}/>

					<Divider color="black_400" margin="y-24"/>
				</>
			)}

			{ctx.services.length > 0 && (
				<>
					<Text margin="b-24" type="title">
						Historial de servicios
					</Text>

					<div style={{ margin: "0 16px" }}>
						{ctx.services?.map((service, idx) => {
							const isLastItem = idx === ctx.services.length - 1;

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
			
			{ctx.servicesPagination && ctx.servicesPagination.page < ctx.servicesPagination.pages && (
				<Flex hAlign="end" margin="t-24 r-16">
					<Button
						kind="outlined"
						loading={ctx.isLoadingServices}
						onClick={ctx.handleMoreServices}
					>
						Cargar más
					</Button>
				</Flex>
				
			)}
    </ServiceReportLayout>
  );
};