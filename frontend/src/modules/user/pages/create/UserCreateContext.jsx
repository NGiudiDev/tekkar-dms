import { createContext } from "react";
import PropTypes from "prop-types";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "../../../../hooks";

import { createUser } from "../../services/user.requests";
import toast from "react-hot-toast";

import { PATH } from "../../../../router/constants/routes.consts";

export const UserCreateContext = createContext();

const DEFAULT_PROPS = {
	children: null,
};

export const UserCreateProvider = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();
	
	const initialUser = {
		doc_number: "",
		email: "",
		name: "",
		phone: "",
	};

	const userMutation =  useMutation({
		mutationFn: (obj) => createUser(obj),
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
			case 409:
				toast.error("El email ingresado ya está registrado en el sistema.");
				break;
			case 422:
				toast.error("Se han enviado datos que no son permitidos.");
				break;
			case 500:
				toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
				break;
			}
		},
		onSuccess: (data) => {
			toast.success("Usuario creado exitosamente.");
			router.push(`${PATH.users}/${data.user.id}`);
		},
	});

	const handleSubmitUser = (values) => {
		userMutation.mutate(values);
	};

	const valueObj = {
		initialUser,
		handleSubmitUser,
	};

	return (
		<UserCreateContext.Provider value={valueObj}>
			{attrs.children}
		</UserCreateContext.Provider>
	);
};

UserCreateProvider.propTypes = {
	children: PropTypes.node,
};
