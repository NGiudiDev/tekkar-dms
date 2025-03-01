import React, { useState } from "react";
import PropTypes from "prop-types";

import { UserDetailContext } from "./hooks/useUserDetailContext";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useRouter } from "@hooks";

import { getUserDetail, updateUserDetail } from "@user/services/user.requests";
import { getChangedFields, isEmptyObject } from "@common/utils/forms.utils";

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
	const router = useRouter();

	const [isUserEditing, setIsUserEditing] = useState(false);
	const [formUser, setFormUser] = useState(null);
	const [user, setUser] = useState(null);

	const id = parseInt(router.query.id);

	const query = useQuery({
		queryKey:	["user-detail", id],
		queryFn: async () => {
			const user = await getUserDetail(id);

			setUserValues(user);
			setUser(user);
			return user;
		},
	});

	const userMutation =  useMutation({
		mutationFn: (modifiedObj) => {
			return updateUserDetail(id, modifiedObj);
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
			toast.success("Se ha actualizado la información del usuario.");

			setUserValues(data);
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
		queryClient.invalidateQueries({ queryKey: ["user-detail"] });
	};

	const handleSubmitUser = (values) => {
			const modifiedObj = getChangedFields(values, formUser);
	
			if (!isEmptyObject(modifiedObj)) {
				userMutation.mutate(modifiedObj);
			}
		};

	const handleUserEdit = () => {
		setIsUserEditing((prev) => !prev);
	};

	const valueObj = {
		error: query.error,
		formUser,
		handleImageChange,
		handleSubmitUser,
		handleUserEdit,
		isLoading: query.isLoading || !user,
		isLoggedUser: id === loggedUser.id,
		isUserEditing,
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