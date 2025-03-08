import React from "react";

import { usePasswordRecoveryContext } from "./hooks/use_password_recovery_context";

import { PersonEmailInput } from "@person/components";
import { SessionLayout } from "@session/components";
import { Form, Formik } from "formik";

import { Button, Text } from "ds-loud-ng";

import { passwordRecoverySchema } from "@session/services/session_validations_services";

export const PasswordRecoveryContent = () => {
	const ctx = usePasswordRecoveryContext();
  
	return (
		<SessionLayout>
			<Text margin="b-16" type="title">
				Recupero de contraseña
			</Text>

			<Text margin="b-20">
				Una vez proporcionado el correo electrónico, se le enviarán las instrucciones 
				necesarias para completar el proceso de actualización de contraseña.
			</Text>

			<Formik 
				initialValues={{
					email: "",
				}}
				onSubmit={ctx.handleSubmit}
				validationSchema={passwordRecoverySchema}
			>
				<Form>
					<PersonEmailInput margin="b-16" />

					<Button fullWidth type="submit">
						Continuar
					</Button>
				</Form>
			</Formik>

			<Button
				fullWidth
				kind="outlined"
				margin="t-16"
				onClick={ctx.handleBackToLogin}
				type="submit"
			>
				Cancelar
			</Button>
		</SessionLayout>
	);
};