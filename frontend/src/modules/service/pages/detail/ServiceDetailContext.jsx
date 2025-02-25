import { useState } from "react";
import PropTypes from "prop-types";

import { ServiceDetailContext } from "./hooks/useServiceDetailContext";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "../../../../hooks";

import { getServiceDetail, updateServiceDetail } from "../../services/service.requests";
import { getChangedFields, isEmptyObject } from "../../../common/utils/forms.utils";

import toast from "react-hot-toast";

const DEFAULT_PROPS = {
	children: null,
};

export const ServiceDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const [isServiceEditing, setIsServiceEditing] = useState(false);
	const [formService, setFormService] = useState({});
	const [service, setService] = useState(null);

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey: ["service-detail", id],
		queryFn: async () => {
			const service = await getServiceDetail(id);

			setServiceValues(service);
			setService(service);

			return service;
		},
	});

	const serviceMutation =  useMutation({
		mutationFn: (modifiedObj) => {
			return updateServiceDetail(id, modifiedObj);
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
			toast.success("Se ha actualizado la información del servicio.");

			setServiceValues(data);
			setService(data);
			handleServiceEdit();
		},
	});

	const setServiceValues = (service) => {
		setFormService({
			description: service.description || "",
			next_service_mileage: service.next_service_mileage || "",
			performed_at: service.performed_at || "",
			price: service.price || 0,
			service_duration: service.service_duration || 0,
			service_mileage: service.service_mileage || 0,
			title: service.title || 0,
		});
	};

	const handleServiceEdit = () => {
		setIsServiceEditing((prev) => !prev);
	};

	const handleSubmitService = (values) => {
		const modifiedObj = getChangedFields(values, formService);

		if (!isEmptyObject(modifiedObj)) {
			serviceMutation.mutate(modifiedObj);
		}
	};

	const valueObj = {
		error: query.error,
		formService,
		handleServiceEdit,
		handleSubmitService,
		isLoading: query.isLoading || !service,
		isServiceEditing,
		service,
	};

	return (
		<ServiceDetailContext.Provider value={valueObj}>
			{attrs.children}
		</ServiceDetailContext.Provider>
	);
};

ServiceDetailProvider.propTypes = {
	children: PropTypes.node,
};
