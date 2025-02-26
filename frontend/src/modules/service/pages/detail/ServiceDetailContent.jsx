import React from "react";

import { useServiceDetailContext } from "./hooks/useServiceDetailContext.jsx";

import { ServiceInformationForm, ServiceInformationSection } from "../../components";
import { PersonInformationSection } from "../../../person/components";
import { CarInformationSection } from "../../../car/components";
import { Form, Formik } from "formik";
import {
	PageLoadingLayout,
	PageMessageLayout,
	UpdateButton
} from "../../../common/components";

import { Box, Divider, Flex, IconButton, Text } from "ds-loud-ng";

import { serviceYupSchema } from "../../services/service.validations";

export const ServiceDetailContent = () => {
	const ctx = useServiceDetailContext();

	if (ctx.isLoading) return <PageLoadingLayout />;

	if (ctx.error) {
		return (
			<PageMessageLayout 
				description="Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde."
				isFullScreen
				title="Error al obtener la información"
			/>
		);
	}

	return (
		<>
			<Flex hAlign="space-between" margin="b-24">
				<Text type="title">
					Servicio
				</Text>

				<IconButton
					icon={{ icon: ctx.isServiceEditing ? "times" : "pencil" }}
					margin="r-8"
					onClick={ctx.handleServiceEdit}
				/>
			</Flex>

			<Box margin="x-10">
				{ctx.isServiceEditing ? (
					<Formik
						initialValues={ctx.formService}
						onSubmit={ctx.handleSubmitService}
						validationSchema={serviceYupSchema}
					>
						{formik => (
							<Form>
								<ServiceInformationForm />
							
								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>

								<Divider margin="b-32 t-16" />

								<Text margin="b-24" type="title">
									Vehículo
								</Text>

								<CarInformationSection car={ctx.service.car} />

								<Divider margin="b-32 t-16" />

								<Text margin="b-24" type="title">
									Propietario
								</Text>

								<PersonInformationSection person={ctx.service.car.person} />
							</Form>
						)}
					</Formik>	
				) :(
					<>
						<ServiceInformationSection service={ctx.service} />
						
						<Divider margin="b-32 t-16" />

						<Text margin="b-24" type="title">
							Vehículo
						</Text>

						<CarInformationSection car={ctx.service.car} />

						<Divider margin="b-32 t-16" />

						<Text margin="b-24" type="title">
							Propietario
						</Text>

						<PersonInformationSection person={ctx.service.car.person} />
					</>
				)}
			</Box>
		</>
	);
};