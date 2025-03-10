import React, { useState } from "react";
import PropTypes from "prop-types";

import { UserDetailContext } from "./hooks/use_user_detail_context";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "@hooks";

import { getChangedFields, isEmptyObject } from "@common/utils/form_utils";
import { updatePersonDetail } from "@person/services/person_requests_services";
import { getUserDetail } from "@user/services/user_requests_services";
import { updatePerson } from "@store/store";

import toast from "react-hot-toast";

import { USER_QUERY_KEYS } from "@user/constants/user_consts"; 

const DEFAULT_PROPS = {
	children: null,
};

export const UserDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const loggedUser = useSelector(state => state.user);
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const router = useRouter();

	const [isUserEditing, setIsUserEditing] = useState(false);
	const [formUser, setFormUser] = useState(null);
	const [user, setUser] = useState(null);

	const [showModal, setShowModal] = useState(null);

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey:	USER_QUERY_KEYS.detail(id),
		queryFn: async () => {
			const user = await getUserDetail(id);

			setUserValues(user);
			setUser(user);

			return user;
		},
	});

	const personMutation =  useMutation({
		mutationFn: (data) => {
			return updatePersonDetail(data.id, data.params);
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
		onSuccess: (person) => {
			toast.success("Se ha actualizado la información del usuario.");
			
			if (person.id === loggedUser.person.id) {
				dispatch(updatePerson(person));
			}

			setUserValues({...user, person});
			setUser((prev) => ({ ...prev, person }));

			handleUserEdit();
		},
	});

	const setUserValues = (user) => {
		setFormUser({
			doc_number: user.person.doc_number || "",
			email: user.person.email || "",
			name: user.person.name || "",
			phone: user.person.phone || "",
		});
	};

	const handleImageChange = () => {
		//? The GET request is invalidated to trigger a refetch and retrieve the updated data.
		queryClient.invalidateQueries({ queryKey: USER_QUERY_KEYS.detail(id) });
	};

	const handleOcultModal = () => {
		setShowModal(null);
	};

	const handleShowModal = (name) => {
		setShowModal(name);
	};

	const handleSubmitUser = (values) => {
		const modifiedObj = getChangedFields(values, formUser);

		if (!isEmptyObject(modifiedObj)) {
			personMutation.mutate({
				id: user.person.id,
				params: modifiedObj
			});
		}
	};

	const handleUserEdit = () => {
		setIsUserEditing((prev) => !prev);
	};

	const valueObj = {
		error: query.error,
		formUser,
		handleImageChange,
		handleOcultModal,
		handleShowModal,
		handleSubmitUser,
		handleUserEdit,
		isLoading: query.isLoading || !user,
		isLoggedUser: id === loggedUser.id,
		isUserEditing,
		showModal,
		user,
	};

	return (
		<UserDetailContext.Provider value={valueObj}>
			{attrs.children}
		</UserDetailContext.Provider>
	);
};

UserDetailProvider.propTypes = {
	children: PropTypes.node,
};