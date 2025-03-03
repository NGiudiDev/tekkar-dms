import React from "react";

import { useCarDetailContext } from "./hooks/use_car_detail_context";

import { CarInformationForm, CarInformationSection } from "@car/components";
import { PersonInformationSection } from "@person/components";
import { ServiceTable } from "@service/components";
import { CarActionsDropdown } from "./components";
import { Form, Formik } from "formik";
import {
	PageLoadingLayout,
	PageMessageLayout,
	UpdateButton
} from "@common/components";

import { Box, Divider, Flex, IconButton, Text } from "ds-loud-ng";

import { carUpdateSchema } from "@car/services/car_validations_services";

export const CarDetailContent = () => {
	const ctx = useCarDetailContext();

	if (ctx.error) {
		if(ctx.error.status === 404) {
			return (
				<PageMessageLayout 
					description="No se pudo encontrar la información del vehículo. Por favor, verifique la URL o intente nuevamente más tarde."
					isFullScreen
					title="Vehículo no encontrado"
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
					Vehículo
				</Text>

				<Flex>
					<IconButton
						icon={{ icon: ctx.isCarEditing ? "times" : "pencil" }}
						margin="r-8"
						onClick={ctx.handleCarEdit}
					/>
					
					<CarActionsDropdown />					
				</Flex>
			</Flex>

			<Box margin="x-10">
				{ctx.isCarEditing ? (
					<Formik
						initialValues={ctx.formCar}
						onSubmit={ctx.handleSubmitCar}
						validationSchema={carUpdateSchema}
					>
						{formik => (
							<Form>
								<CarInformationForm />

								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>

								<Divider margin="b-24" />

								<Text margin="b-24" type="title">
									Propietario
								</Text>
								
								<PersonInformationSection person={ctx.car.person} />	
							</Form>
						)}
					</Formik>
				) : (
					<>
						<CarInformationSection car={ctx.car} />
						
						<Divider margin="b-24" />

						<Text margin="b-24" type="title">
							Propietario
						</Text>
				
						<PersonInformationSection person={ctx.car.person} />					
					</>
				)}

				{ctx.servicesList?.pagination.total > 0 && (
					<>
						<Divider margin="b-24" />
						
						<Text margin="b-16" type="subtitle">
							Servicios
						</Text>

						<ServiceTable
							list={ctx.servicesList.list}
							onChangePage={ctx.handleServicePageChange}
							pagination={ctx.servicesList.pagination}
						/>
					</>
				)}
			</Box>
		</>
	);
};