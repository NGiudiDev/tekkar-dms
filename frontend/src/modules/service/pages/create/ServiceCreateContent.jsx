import { useContext } from "react";

import { ServiceCreateContext } from "./ServiceCreateContext";

import { useRouter } from "../../../../hooks";

import { FormContainer, PageMessageLayout } from "../../../common/components";
import { Form, Formik } from "formik";
import {
	NextServiceMileageInput,
	ServiceDescriptionInput,
	ServiceDurationInput,
	ServiceMileageInput,
	ServicePerformedAtInput,
	ServicePriceInput,
	ServiceTitleInput,
} from "../../components";

import { Button, Columns, Flex, Text } from "ds-loud-ng";

export const ServiceCreateContent = () => {
	const ctx = useContext(ServiceCreateContext);
	const router = useRouter();

	if (!router.query.car_id) {
		return(
			<PageMessageLayout
				description="Para crear un servicio, es necesario ir al detalle del vehículo y elegir la opción 'crear servicio' que se encuentra en el menú de acciones."
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
					validationSchema={ctx.serviceValidation}
				>
					{formik => (
						<Form>
							<Columns margin="b-8">
								<ServiceTitleInput />
								<ServicePerformedAtInput />
							</Columns>
							
							<Columns margin="b-8">
								<ServiceMileageInput />
								<NextServiceMileageInput />
							</Columns>

							<Columns margin="b-8">
								<ServicePriceInput margin="b-8" />
								<ServiceDurationInput margin="b-8" />
							</Columns>
													
							<ServiceDescriptionInput />

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
