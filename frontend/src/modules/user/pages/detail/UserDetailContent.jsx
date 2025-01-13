import { useContext } from "react";

import { UserDetailContext } from "./UserDetailContext";

import { UserInformationSection, UserInformationForm } from "../../components";
import { Formik, Form } from "formik";
import {
	PageLoadingLayout,
	PageMessageLayout,
	UpdateButton
} from "../../../common/components";

import { Box, Flex, IconButton, Text } from "ds-loud-ng";

export const UserDetailContent = () => {
	const ctx = useContext(UserDetailContext);

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
					Datos personales
				</Text>
				
				<IconButton
					icon={{ icon: ctx.isUserEditing ? "times" : "pencil" }}
					margin="r-8"
					onClick={ctx.handleUserEdit}
				/>
			</Flex>

			<Box margin="x-10">
				{ctx.isUserEditing ? (
					<Formik
						initialValues={ctx.formUser}
						onSubmit={ctx.handleSubmitUser}
						validationSchema={ctx.userValidation}
					>
						{formik => (
							<Form>
								<UserInformationForm isMyself={ctx.isLoggedUser} />
								
								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>
							</Form>
						)}
					</Formik>	
				) : (
					<UserInformationSection user={ctx.user} />
				)}
			</Box>
		</>
	);
};