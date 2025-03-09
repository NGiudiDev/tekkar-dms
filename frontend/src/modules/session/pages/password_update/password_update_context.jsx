import React from "react";
import PropTypes from "prop-types";

import { PasswordUpdateContext } from "./hooks/use_password_update_context";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { userPasswordUpdate } from  "../../services/session_requests_services";

import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
	children: null,
};

export const PasswordUpdateProvider = (props) => {
	const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

	const router = useRouter();

	const passwordUpdateMutation =  useMutation({
		mutationFn: (modifiedObj) => userPasswordUpdate(modifiedObj, router.query.token),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
				case 401:
					toast.error("Se produjo un error de autenticación. Por favor, vuelva a iniciar el proceso de cambio de contraseña.");
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
			router.push(`${PATH.passwordUpdate}`, { state: { success: true } });
		},
	});

	const handleSubmit = (formValues) => {
		passwordUpdateMutation.mutate(formValues);
	};

	const valueObj = {
		handleSubmit,
	};

	return (
		<PasswordUpdateContext.Provider value={valueObj}>
			{attrs.children}
		</PasswordUpdateContext.Provider>
	);
};

PasswordUpdateProvider.propTypes = {
	children: PropTypes.node,
};