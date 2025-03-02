import React from "react";

import { useClientDetailContext } from "./hooks/useClientDetailContext.jsx";

import { PageLoadingLayout, PageMessageLayout, UpdateButton } from "@common/components";
import { PersonInformationForm, PersonInformationSection } from "@person/components"; 
import { Form, Formik } from "formik";

import { Box, Flex, IconButton, Text } from "ds-loud-ng";

export const ClientDetailContent = () => {
	const ctx = useClientDetailContext();

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
					icon={{ icon: ctx.isClientEditing ? "times" : "pencil" }}
					margin="r-8"
					onClick={ctx.handleClientEdit}
				/>
			</Flex>

			<Box margin="x-10">
				{ctx.isClientEditing ? (
					<Formik
						initialValues={ctx.formClient}
						onSubmit={ctx.handleSubmitClient}
						//validationSchema={serviceYupSchema}
					>
						{formik => (
							<Form>
								<PersonInformationForm
									onImageChange={ctx.handleImageChange}
									person={ctx.client}
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
						person={ctx.client}
					/>
				)}
				
			</Box>
		</>
	);
};