import { createContext } from "react";
import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";
import { useMutation } from "@tanstack/react-query";

import { serviceValidation } from "../../services/service.validations";
import { createService } from "../../services/service.requests";
import toast from "react-hot-toast";

import { PATH } from "../../../common/constants/routes.consts";

export const ServiceCreateContext = createContext();

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
			car_id: 1,
			date: "",
			description: "",
			km_next_service: "",
			km_service: "",
			title: "",
			price: "",
		},
		serviceValidation,
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
