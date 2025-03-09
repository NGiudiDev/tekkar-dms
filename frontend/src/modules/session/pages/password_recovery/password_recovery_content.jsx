import React from "react";

import { usePasswordRecoveryContext } from "./hooks/use_password_recovery_context";
import { useRouter } from "@hooks";

import { PersonEmailInput } from "@person/components";
import { SessionLayout } from "@session/components";
import { PageMessageLayout } from "@common/components";
import { Form, Formik } from "formik";

import { Button, Text } from "ds-loud-ng";

import { passwordRecoverySchema } from "@session/services/session_validations_services";

import { PATH } from "@router/constants/routes_consts";

export const PasswordRecoveryContent = () => {
	const ctx = usePasswordRecoveryContext();
  
	const router = useRouter();

	if (router.location.state.success) {
		return (
			<PageMessageLayout
				button={{
					children: "Ir al inicio de sesión",
					onClick: () => router.push(PATH.login),
				}}
				description="Por favor, dirígete al correo electrónico enviado y procede a cambiar la contraseña."
				isFullScreen
				title="Correo electrónico enviado"
			/>
		);
	}

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