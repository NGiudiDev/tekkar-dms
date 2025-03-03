import React from "react";

import { useServiceCreateContext } from "./hooks/useServiceCreateContext";
import { useRouter } from "@hooks";

import { FormContainer, PageMessageLayout } from "@common/components";
import { ServiceInformationForm } from "@service/components";
import { Form, Formik } from "formik";

import { Button, Flex, Text } from "ds-loud-ng";

import { serviceYupSchema } from "@service/services/service.validations";

export const ServiceCreateContent = () => {
	const ctx = useServiceCreateContext();
	const router = useRouter();

	if (!router.query.car_id) {
		return(
			<PageMessageLayout
				description="Para crear un servicio, es necesario ir al detalle del vehículo y elegir la opción 'agregar servicio' que se encuentra en el menú de acciones."
				isFullScreen
				title="Falta seleccionar un vehículo"
			/>
		);
	}

	return (
		<>
			<Text margin="b-40" type="title">
				Nuevo servicio
			</Text>

			<FormContainer>
				<Formik
					initialValues={ctx.service}
					onSubmit={ctx.handleSubmitService}
					validationSchema={serviceYupSchema}
				>
					{formik => (
						<Form>
							<ServiceInformationForm />

							<Flex margin="t-24" hAlign="end">
								<Button disabled={!formik.isValid} type="submit">
									Crear
								</Button>
							</Flex>
						</Form>
					)}
				</Formik>
			</FormContainer>
		</>
	);
};