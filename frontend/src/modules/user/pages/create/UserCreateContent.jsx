import { useContext } from "react";

import { UserCreateContext } from "./UserCreateContext";

import { CreateButton, ThreeColumnsGrid } from "../../../common/components";
import { UserInformationForm, UserPasswordInput } from "../../components";
import { Formik, Form } from "formik";

import { Box, Flex, Text } from "ds-loud-ng";

import { userYupSchema } from "../../services/user.validations";

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
					validationSchema={userYupSchema}
				>
					{formik => (
						<Form>
							<UserInformationForm />

							<ThreeColumnsGrid.Grid>
								<ThreeColumnsGrid.Row>
									<UserPasswordInput />
								</ThreeColumnsGrid.Row>
							</ThreeColumnsGrid.Grid>
							
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