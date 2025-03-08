import React from "react";
import PropTypes from "prop-types";

import { PasswordRecoveryContext } from "./hooks/use_password_recovery_context";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { userPasswordRecovery } from "../../services/session_requests_services";

import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
	children: null,
};

export const PasswordRecoveryProvider = (props) => {
	const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };;

	const router = useRouter();

	const passwordRecoveryMutation =  useMutation({
		mutationFn: (modifiedObj) => userPasswordRecovery(modifiedObj),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
				case 404:
					toast.error("El email ingresado es inválido.");
					break;
				case 422:
					toast.error("Se han enviado datos que no son permitidos.");
					break;
				case 500:
					toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
					break;
			}
		},
		onSuccess: () => {
			router.push(`${PATH.passwordRecovery}?status=success`);
		},
	});

	const handleSubmit = (formValues) => {
		passwordRecoveryMutation.mutate(formValues);
	};

	const handleBackToLogin = () => {
		router.push(PATH.login);
	};

	const valueObj = {
		handleBackToLogin,
		handleSubmit,
	};

	return (
		<PasswordRecoveryContext.Provider value={valueObj}>
			{attrs.children}
		</PasswordRecoveryContext.Provider>
	);
};

PasswordRecoveryProvider.propTypes = {
	children: PropTypes.node,
};