import React from "react";
import PropTypes from "prop-types";

import { CarCreateContext } from "./hooks/useCarCreateContext"; 

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { createCar } from "@car/services/car.requests";
import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes.consts";

const DEFAULT_PROPS = {
	children: null,
};

export const CarCreateProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const carMutation =  useMutation({
		mutationFn: (modifiedObj) => createCar(modifiedObj),
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
			toast.success("Vehículo creado exitosamente.");
			router.push(`${PATH.cars}/${data.id}`);
		},
	});

	const handleSubmitCar = (values) => {
		carMutation.mutate(values);
	};

	const valueObj = {
		handleSubmitCar,
		car: {
			brand: "",
			license_plate: "",
			model: "",
			owner_id: router.query.owner_id,
			production_year: "",
		},
	};

	return (
		<CarCreateContext.Provider value={valueObj}>
			{attrs.children}
		</CarCreateContext.Provider>
	);
};

CarCreateProvider.propTypes = {
	children: PropTypes.node,
};