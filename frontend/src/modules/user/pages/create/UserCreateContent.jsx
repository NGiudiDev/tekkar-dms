import { useContext } from "react";

import { UserCreateContext } from "./UserCreateContext";

import { Formik, Form } from "formik";

import { UserInformationForm, UserPasswordInput } from "../../components";
import { CreateButton } from "../../../common/components";

import { Box, Columns, Flex, Text } from "ds-loud-ng";

export const UserCreateContent = () => {
	const ctx = useContext(UserCreateContext);

	return (
		<>
			<Text margin="b-24" type="title">
				Crear usuario
			</Text>

			<Box margin="x-10">
				<Formik
					initialValues={ctx.initialUser}
					onSubmit={ctx.handleSubmitUser}
					validationSchema={ctx.userValidation}
				>
					{formik => (
						<Form>
							<UserInformationForm />

							{/* TODO: diseñar un componente de Grid y usarlo aca. */}
							<Columns>
								<UserPasswordInput />
								<div/>
								<div/>
							</Columns>
							
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