import React, { useState } from "react";
import PropTypes from "prop-types";

import { CarDetailContext } from "./hooks/use_car_detail_context";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "@hooks";

import { getChangedFields, isEmptyObject } from "@common/utils/forms.utils";
import { getCarDetailById, updateCarDetail } from "@car/services/car_requests_services";
import { getServicePage } from "@service/services/service.requests";
import toast from "react-hot-toast";

import { CAR_QUERY_KEYS } from "@car/constants/car_consts";
import { PATH } from "@router/constants/routes.consts";

const DEFAULT_PROPS = {
	children: null,
};

export const CarDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const [isCarEditing, setIsCarEditing] = useState(false);
	
	const [servicesList, setServicesList] = useState(null);
	const [servicesPage, setServicesPage] = useState(1);
	const [car, setCar] = useState(null);

	//? The formCar component saves the original object to compare it with the modified object,
	//? sending only the differences to the backend. 
	const [formCar, setFormCar] = useState({});
	
	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey: CAR_QUERY_KEYS.detail(id, { servicesPage }),
		queryFn: async () => {
			const requests = [
				getCarDetailById(id),
				getServicePage({ page: servicesPage, car_id: id}),
			];

			const [car, servicesList] = await Promise.all(requests);

			setServicesList(servicesList);
			setCarValues(car);
			setCar(car);

			return { car, servicesList };
		},
	});

	const carMutation =  useMutation({
		mutationFn: (modifiedObj) => {
			return updateCarDetail(id, modifiedObj);
		},
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
			toast.success("Se ha actualizado la información del vehículo.");

			setCarValues(data);
			setCar(data);
			handleCarEdit();
		},
	});

	const handleCarEdit = () => {
		setIsCarEditing((prev) => !prev);
	};

	const handleCreateService = () => {
		router.push(`${PATH.serviceCreate}?car_id=${car.id}`);
	};

	const handleServicePageChange = (page) => {
		setServicesPage(page);
	};

	const handleSubmitCar = (values) => {
		const modifiedObj = getChangedFields(values, formCar);

		if (!isEmptyObject(modifiedObj)) {
			carMutation.mutate(modifiedObj);
		}
	};

	const setCarValues = (car) => {
		setFormCar({
			brand: car.brand || "",
			license_plate: car.license_plate || "",
			model: car.model || "",
			owner_id: car.owner_id || 0,
			production_year: car.production_year || "",
		});
	};

	const valueObj = {
		car,
		error: query.error,
		formCar,
		handleCarEdit,
		handleCreateService,
		handleServicePageChange,
		handleSubmitCar,
		isCarEditing,
		isLoading: query.isLoading || !car,
		servicesList,
	};

	return (
		<CarDetailContext.Provider value={valueObj}>
			{attrs.children}
		</CarDetailContext.Provider>
	);
};

CarDetailProvider.propTypes = {
	children: PropTypes.node,
};