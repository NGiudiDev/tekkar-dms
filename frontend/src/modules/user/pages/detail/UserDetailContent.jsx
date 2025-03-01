import React from "react";

import { useUserDetailContext } from "./hooks/useUserDetailContext.jsx";

import { PageLoadingLayout, PageMessageLayout, UpdateButton } from "@common/components";
import { PersonInformationForm, PersonInformationSection } from "@person/components"; 
import { Form, Formik } from "formik";

import { Box, Flex, IconButton, Text } from "ds-loud-ng";

export const UserDetailContent = () => {
	const ctx = useUserDetailContext();

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
					Usuario
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
						//validationSchema={serviceYupSchema}
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
		</>
	);
};