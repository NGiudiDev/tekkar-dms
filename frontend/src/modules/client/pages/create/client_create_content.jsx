import React from "react";

import { useClientCreateContext } from "./hooks/use_client_create_context.jsx";

import { PersonInformationForm } from "@person/components";
import { CreateButton } from "@common/components";
import { Formik, Form } from "formik";

import { Box, Flex, Text } from "ds-loud-ng";

import { clientYupSchema } from "@client/services/client_validations_services";

export const ClientCreateContent = () => {
	const ctx = useClientCreateContext();

	return (
		<>
			<Text margin="b-24" type="title">
				Crear cliente
			</Text>

			<Box margin="x-10">
				<Formik
					initialValues={ctx.initialClient}
					onSubmit={ctx.handleSubmitClient}
					validationSchema={clientYupSchema}
				>
					{formik => (
						<Form>
							<PersonInformationForm />
							
							<Flex margin="b-32 t-8" hAlign="end">
								<CreateButton disabled={!(formik.dirty && formik.isValid)} />
							</Flex>
						</Form>
					)}
				</Formik>	
			</Box>
		</>
	);
};