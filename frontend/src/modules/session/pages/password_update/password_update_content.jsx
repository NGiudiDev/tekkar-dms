import React from "react";

import { usePasswordUpdateContext } from "./hooks/use_password_update_context.jsx";
import { useRouter } from "@hooks";

import { PageMessageLayout } from "@common/components";
import { UserPasswordInput } from "@user/components";
import { SessionLayout } from "@session/components";
import { Form, Formik } from "formik";

import { Button, Text } from "ds-loud-ng";

import { PATH } from "@router/constants/routes_consts";

export const PasswordUpdateContent = () => {  
	const ctx = usePasswordUpdateContext();
	const router = useRouter();

	if (router.location.state?.success) {
		return (
			<PageMessageLayout
				button={{
					children: "Ir al inicio de sesión",
					onClick: () => router.push(PATH.login),
				}}
				description="Se ha realizado con éxito el cambio de contraseña para tu usuario."
				isFullScreen
				title="Contraseña actualizada"
			/>
		);
	}

	return (
		<SessionLayout>
			<Text margin="b-16" type="title">
				Recupero de contraseña
			</Text>

			<Text margin="b-20">
				¡Actualiza tu contraseña! Aquí puedes cambiar la contraseña de tu cuenta. Protege 
				tu privacidad y seguridad eligiendo una nueva contraseña robusta y única.
			</Text>

			<Formik 
				initialValues={{
					password: "",
				}}
				onSubmit={ctx.handleSubmit}
				validationSchema={ctx.newPasswordValidation}
			>
				<Form>
					<UserPasswordInput margin="b-16" />

					<Button fullWidth type="submit">
						Actualizar contraseña
					</Button>
				</Form>
			</Formik>
		</SessionLayout>
	);
};