import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getChangedFields, isEmptyObject } from "../../../common/utils/forms.utils";
import { getUserDetail, updateUserDetail } from "../../services/user.requests";
import { userValidation } from "../../services/user.validations.js";
import { updateUser } from "../../../session/store/store";
import toast from "react-hot-toast";

export const UserDetailContext = createContext();

const DEFAULT_PROPS = {
	children: null,
};

export const UserDetailProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};
	
	const loggedUser = useSelector(state => state.user);
	const dispatch = useDispatch();
	const router = useRouter();

	const [isUserEditing, setIsUserEditing] = useState(false);
	const [formUser, setFormUser] = useState({});
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

			if (data.user.id === loggedUser.id) {
				dispatch(updateUser(data.user));
			}

			setUserValues(data.user);
			setUser(data.user);
			handleUserEdit();
		},
	});

	const setUserValues = (user) => {
		setFormUser({
			doc_number: user.doc_number || "",
			email: user.email || "",
			name: user.name || "",
			phone: user.phone || "",
		});
	};

	const handleUserEdit = () => {
		setIsUserEditing((prev) => !prev);
	};

	const handleSubmitUser = (values) => {
		const modifiedObj = getChangedFields(values, formUser);

		if (!isEmptyObject(modifiedObj)) {
			userMutation.mutate(modifiedObj);
		}
	};

	const valueObj = {
		error: query.error,
		formUser,
		handleSubmitUser,
		handleUserEdit,
		isLoading: query.isLoading || !user,
		isLoggedUser: id === loggedUser.id,
		isUserEditing,
		user,
		userValidation,
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
