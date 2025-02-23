import { useContext } from "react";

import { UserDetailContext } from "./UserDetailContext";

import { PersonInformationSection } from "../../../person/components"; 

import {
	PageLoadingLayout,
	PageMessageLayout,
} from "../../../common/components";

import { Box, Flex, Text } from "ds-loud-ng";

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
			</Flex>

			<Box margin="x-10">
				<PersonInformationSection onImageChange={ctx.handleImageChange} person={ctx.user.person} />
			</Box>
		</>
	);
};