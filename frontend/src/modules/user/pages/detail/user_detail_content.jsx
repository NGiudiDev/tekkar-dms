import React from "react";

import { useUserDetailContext } from "./hooks/use_user_detail_context.jsx";

import { PageLoadingLayout, PageMessageLayout, UpdateButton } from "@common/components";
import { PersonInformationForm, PersonInformationSection } from "@person/components"; 
import { SetUserAsClientModal, UserActionsDropdown } from "./components";
import { Form, Formik } from "formik";

import { Box, Flex, IconButton, Text } from "ds-loud-ng";

import { userUpdateSchema } from "@user/services/user_validations_services";

export const UserDetailContent = () => {
	const ctx = useUserDetailContext();

	if (ctx.error) {
		if(ctx.error.status === 404) {
			return (
				<PageMessageLayout 
					description="No se pudo encontrar la información del usuario. Por favor, verifique la URL o intente nuevamente más tarde."
					isFullScreen
					title="Usuario no encontrado"
				/>
			);
		}

		return (
			<PageMessageLayout 
				description="Hubo un error al obtener la información, por favor recargue la página o intentelo más tarde."
				isFullScreen
				title="Error al obtener la información"
			/>
		);
	}

	if (ctx.isLoading) return <PageLoadingLayout />;

	return (
		<>
			<Flex hAlign="space-between" margin="b-24">
				<Text type="title">
					Usuario
				</Text>

				<Flex>
					<IconButton
						icon={{ icon: ctx.isUserEditing ? "times" : "pencil" }}
						margin="r-8"
						onClick={ctx.handleUserEdit}
					/>

					<UserActionsDropdown />	
				</Flex>
			</Flex>

			<Box margin="x-10">
				{ctx.isUserEditing ? (
					<Formik
						initialValues={ctx.formUser}
						onSubmit={ctx.handleSubmitUser}
						validationSchema={userUpdateSchema}
					>
						{formik => (
							<Form>
								<PersonInformationForm
									onImageChange={ctx.handleImageChange}
									person={ctx.user.person}
								/>

								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>
							</Form>
						)}
					</Formik>
				) : (
					<PersonInformationSection
						onImageChange={ctx.handleImageChange}
						person={ctx.user.person}
					/>
				)}
			</Box>

			<SetUserAsClientModal />
		</>
	);
};