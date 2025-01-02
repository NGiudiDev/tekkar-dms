import { useState } from "react";

import { useRouter } from "../../../common/hooks/useRouter";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { Button, Input, Text } from "ds-loud-ng";
import { Form, Formik } from "formik";

import { loginValidation } from "../../services/session.validations";
import { userLogin } from "../../services/session.requests";
import { login } from "../../store/store";
import toast from "react-hot-toast";

import { PATH } from "../../../common/constants/routes.consts";

import { Styles } from "./LoginPage.styles";

const LoginPage = () => {
	const [error, setError] = useState(false);

	const dispatch = useDispatch();
	const router = useRouter();

	const userMutation =  useMutation({
		mutationFn: (modifiedObj) => userLogin(modifiedObj),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
			case 500:
				toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
				break;
			}

			setError(true);
		},
		onSuccess: (data) => {
			dispatch(login(data));
			router.push(PATH.cars);
		},
	});

	const handleGoToPasswordRecovery = () => {
		router.push(PATH.passwordRecovery);
	};

	const handleSubmit = (formValues) => {
		setError(false);
		userMutation.mutate(formValues);
	};

  return (
		<Styles.Wrapper>
			<Text margin="b-20" type="title">
				Bienvenido 
			</Text>
      
			<Formik 
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={handleSubmit}
				validationSchema={loginValidation}
			>
				<Form>
          <Input
            label="Email"
            margin="b-8"
            name="email"
          />

          <Input
            label="Contraseña"
            margin="b-12"
            name="password"
            type="password"
          />
					
					{error && (
						<Text margin="b-20">
							El email o contraseña ingresado es inválido.
						</Text>
					)}

					<Button fullWidth type="submit">
						Iniciar sesión
					</Button>
				</Form>
			</Formik>

			<Button fullWidth kind="text" margin="t-8" onClick={handleGoToPasswordRecovery}>
				Recuperar contraseña
			</Button>
		</Styles.Wrapper>
	);
}

export default LoginPage;
