import React from "react";

import { useUserCreateContext } from "./hooks/use_user_create_context.jsx";

import { UserInformationForm } from "@user/components";
import { CreateButton } from "@common/components";
import { Formik, Form } from "formik";

import { Box, Flex, Text } from "ds-loud-ng";

import { userYupSchema } from "@user/services/user_validations_services";

export const UserCreateContent = () => {
	const ctx = useUserCreateContext();

	return (
		<>
			<Text margin="b-24" type="title">
				Crear usuario
			</Text>

			<Box margin="x-10">
				<Formik
					initialValues={ctx.initialUser}
					onSubmit={ctx.handleSubmitUser}
					validationSchema={userYupSchema}
				>
					{formik => (
						<Form>
							<UserInformationForm />
							
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