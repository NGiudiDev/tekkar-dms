import { useContext } from "react";

import { CarDetailContext } from "./CarDetailContext";

import { Form, Formik } from "formik";

import { ServicesTable } from "../../../service/components";
import {
	PageLoadingLayout,
	PageMessageLayout,
	UpdateButton
} from "../../../common/components";
import {
	CarActionsDropdown,
	CarInformationForm,
	CarInformationSection,
	CarOwnerForm,
	CarOwnerSection
} from "../../components";

import { Box, Divider, Flex, IconButton, Text } from "ds-loud-ng";

export const CarDetailContent = () => {
	const ctx = useContext(CarDetailContext);

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
						validationSchema={ctx.carValidation}
					>
						{formik => (
							<Form>
								<CarInformationForm />

								<Text margin="b-24" type="title">
									Propietario
								</Text>

								<CarOwnerForm />
								
								<Flex margin="b-32 t-8" hAlign="end">
									<UpdateButton disabled={!(formik.dirty && formik.isValid)} />
								</Flex>
							</Form>
						)}
					</Formik>
				) : (
					<>
						<CarInformationSection car={ctx.car} />
						
						<Text margin="b-24" type="title">
							Propietario
						</Text>
				
						<CarOwnerSection car={ctx.car} />					
					</>
				)}

				{ctx.servicesList?.pagination.total > 0 && (
					<>
						<Divider margin="b-24" />
						
						<Text margin="b-16" type="subtitle">
							Servicios
						</Text>

						<ServicesTable
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