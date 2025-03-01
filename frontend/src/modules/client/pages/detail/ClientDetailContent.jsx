import React from "react";

import { useClientDetailContext } from "./hooks/useClientDetailContext.jsx";

import { PageLoadingLayout, PageMessageLayout } from "@common/components";
import { PersonInformationSection } from "@person/components"; 

import { Box, Flex, Text } from "ds-loud-ng";

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
					Cliente
				</Text>
			</Flex>

			<Box margin="x-10">
				<PersonInformationSection onImageChange={ctx.handleImageChange} person={ctx.client} />
			</Box>
		</>
	);
};