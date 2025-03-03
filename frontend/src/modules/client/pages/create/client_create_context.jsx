import React from "react";
import PropTypes from "prop-types";

import { ClientCreateContext } from "./hooks/use_client_create_context";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { createClient } from "@client/services/client_requests_services";
import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes.consts";

const DEFAULT_PROPS = {
	children: null,
};

export const ClientCreateProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();
	
	const initialClient = {
		doc_number: "",
		email: "",
		name: "",
		phone: "",
	};

	const clientMutation =  useMutation({
		mutationFn: (obj) => createClient(obj),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
			case 409:
				toast.error("El email ingresado ya está registrado en el sistema.");
				break;
			case 422:
				toast.error("Se han enviado datos que no son permitidos.");
				break;
			case 500:
				toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
				break;
			}
		},
		onSuccess: (data) => {
			toast.success("Cliente creado exitosamente.");
			router.push(`${PATH.clients}/${data.client.id}`);
		},
	});

	const handleSubmitClient = (values) => {
		clientMutation.mutate(values);
	};

	const valueObj = {
		initialClient,
		handleSubmitClient,
	};

	return (
		<ClientCreateContext.Provider value={valueObj}>
			{attrs.children}
		</ClientCreateContext.Provider>
	);
};

ClientCreateProvider.propTypes = {
	children: PropTypes.node,
};