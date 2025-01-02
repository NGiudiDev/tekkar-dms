import { useContext } from "react";

import { CarCreateContext } from "./CarCreateContext";

import { FormContainer } from "../../../common/components";
import { Form, Formik } from "formik";
import {
	CarBrandInput,
	CarLicensePlateInput,
	CarModelInput,
	CarOwnerDocNumberInput,
	CarOwnerNameInput,
	CarOwnerPhoneInput,
	CarProductionYearInput
} from "../../components";

import { Button, Flex, Text } from "ds-loud-ng";

export const CarCreateContent = () => {
	const ctx = useContext(CarCreateContext); 
 
	return (
		<>
			<Text margin="b-40" type="title">
				Nuevo vehículo
			</Text>

			<FormContainer>
				<Formik
					initialValues={ctx.car}
					onSubmit={ctx.handleSubmitCar}
					validationSchema={ctx.carValidation}
				>
					{formik => (
						<Form>
							<CarBrandInput />
							
							<CarModelInput />							
							
							<CarLicensePlateInput />
							
							<CarProductionYearInput />

							<CarOwnerNameInput />

							<CarOwnerDocNumberInput />

							<CarOwnerPhoneInput />

							<Flex margin="t-24" hAlign="end">
								<Button disabled={!formik.isValid} type="submit">
									Crear
								</Button>
							</Flex>
						</Form>
					)}
				</Formik>
			</FormContainer>
		</>
	);
};
