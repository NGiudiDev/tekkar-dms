import { useContext } from "react";

import { ServiceDetailContext } from "./ServiceDetailContext";

import { ServiceInformationForm, ServiceInformationSection } from "../../components";
import { Form, Formik } from "formik";
import {
	PageLoadingLayout,
	PageMessageLayout,
	UpdateButton
} from "../../../common/components";

import { Box, Flex, IconButton, Text } from "ds-loud-ng";

export const ServiceDetailContent = () => {
	const ctx = useContext(ServiceDetailContext);

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
						validationSchema={ctx.serviceValidation}
					>
						{formik => (
							<Form>
								<ServiceInformationForm />
							
								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>
							</Form>
						)}
					</Formik>	
				) :(
					<ServiceInformationSection service={ctx.service} />
				)}
			</Box>
		</>
	);
};