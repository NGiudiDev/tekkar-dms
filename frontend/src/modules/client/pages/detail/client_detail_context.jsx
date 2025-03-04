import React, { useState } from "react";
import PropTypes from "prop-types";

import { ClientDetailContext } from "./hooks/use_client_detail_context";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "@hooks";

import { getChangedFields, isEmptyObject } from "@common/utils/form_utils";
import { getClientDetail, updateClientDetail } from "@client/services/client_requests_services";
import { getCarPage } from "@car/services/car_requests_services";
import { updatePerson } from "@store/store";

import toast from "react-hot-toast";

import { CLIENT_QUERY_KEYS } from "@client/constants/client_consts"; 
import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
	children: null,
};

export const ClientDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const loggedUser = useSelector(state => state.user);
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const router = useRouter();

	const [isClientEditing, setIsClientEditing] = useState(false);
	const [formClient, setFormClient] = useState(null);
	const [carsList, setCarsList] = useState(null);
	const [carsPage, setCarsPage] = useState(1);
	const [client, setClient] = useState(null);

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey:	CLIENT_QUERY_KEYS.detail(id, { carsPage }),
		queryFn: async () => {
			const requests = [
				getClientDetail(id),
				getCarPage({ page: carsPage, owner_id: id}),
			];

			const [client, carsList] = await Promise.all(requests);
			
			setCarsList(carsList);

			setClientValues(client);
			setClient(client);

			return { client, carsList};
		},
	});

	const clientMutation =  useMutation({
		mutationFn: (modifiedObj) => {
			return updateClientDetail(id, modifiedObj);
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
		onSuccess: (client) => { 
			toast.success("Se ha actualizado la información del cliente.");
			
			if (client.id === loggedUser.person.id) {
				dispatch(updatePerson(client));
			}

			setClientValues(client);
			setClient(client);

			handleClientEdit();
		},
	});

	const handleClientEdit = () => {
		setIsClientEditing((prev) => !prev);
	};

	const handleCreateCar = () => {
		router.push(`${PATH.carCreate}?owner_id=${client.id}`);
	};

	const handleCarPageChange = (page) => {
		setCarsPage(page);
	};

	const handleImageChange = () => {
		//? The GET request is invalidated to trigger a refetch and retrieve the updated data.
		queryClient.invalidateQueries({ queryKey: CLIENT_QUERY_KEYS.detail(id) });
	};

	const handleSubmitClient = (values) => {
		const modifiedObj = getChangedFields(values, formClient);

		if (!isEmptyObject(modifiedObj)) {
			clientMutation.mutate(modifiedObj);
		}
	};

	const setClientValues = (client) => {
		setFormClient({
			doc_number: client.doc_number || "",
			email: client.email || "",
			name: client.name || "",
			phone: client.phone || "",
		});
	};

	const valueObj = {
		carsList,
		client,
		error: query.error,
		formClient,
		handleCarPageChange,
		handleClientEdit,
		handleCreateCar,
		handleImageChange,
		handleSubmitClient,
		isClientEditing,
		isLoading: query.isLoading || !client,
		isLoggedUser: id === loggedUser.id,
	};

	return (
		<ClientDetailContext.Provider value={valueObj}>
			{attrs.children}
		</ClientDetailContext.Provider>
	);
};

ClientDetailProvider.propTypes = {
	children: PropTypes.node,
};