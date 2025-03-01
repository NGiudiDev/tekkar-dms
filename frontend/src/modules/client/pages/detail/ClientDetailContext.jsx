import React from "react";
import PropTypes from "prop-types";

import { ClientDetailContext } from "./hooks/useClientDetailContext";

import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useRouter } from "@hooks";

import { getClientDetail } from "@client/services/client.requests";

import { CLIENT_QUERY_KEYS } from "@client/constants/client.consts";

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
	const router = useRouter();

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey:	CLIENT_QUERY_KEYS.detail(id),
		queryFn: async () =>  getClientDetail(id),
	});

	const handleImageChange = () => {
		//? The GET request is invalidated to trigger a refetch and retrieve the updated data.
		queryClient.invalidateQueries({ queryKey: CLIENT_QUERY_KEYS.detail(id) });
	};

	const valueObj = {
		client: query.data,
		error: query.error,
		handleImageChange,
		isLoading: query.isLoading,
		isLoggedUser: query.isSuccess ? query.data.id === loggedUser.person.id : false,
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