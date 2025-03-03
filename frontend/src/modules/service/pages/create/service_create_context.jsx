import React from "react";
import PropTypes from "prop-types";

import { ServiceCreateContext } from "./hooks/use_service_create_context";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { createService } from "@service/services/service_requests_services";
import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
	children: null,
};

export const ServiceCreateProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const serviceMutation =  useMutation({
		mutationFn: (modifiedObj) => createService(modifiedObj),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
			case 422:
				toast.error("Se han enviado datos que no son permitidos.");
				break;
			case 500:
				toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
				break;
			}
		},
		onSuccess: (data) => {
			toast.success("Servicio creado exitosamente.");
			router.push(`${PATH.services}/${data.id}`);
		},
	});

	const handleSubmitService = (values) => {
		serviceMutation.mutate(values);
	};

	const valueObj = {
		handleSubmitService,
		service: {
			car_id: router.query.car_id,
			description: "",
			next_service_mileage: "",
			performed_at: "",
			price: "",
			service_mileage: "",
			service_duration: "",
			title: "",
		},
	};

	return (
		<ServiceCreateContext.Provider value={valueObj}>
			{attrs.children}
		</ServiceCreateContext.Provider>
	);
};

ServiceCreateProvider.propTypes = {
	children: PropTypes.node,
};