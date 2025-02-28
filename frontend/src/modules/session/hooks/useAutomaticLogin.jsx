import { useEffect } from "react";

import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useRouter } from "@hooks";

import { getLoginOfLocalStorage, removeLoginOfLocalStorage } from "@session/services/session.local_storage";
import { userAuthentication } from "@session/services/session.requests";
import { login } from "@store/store";

import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes.consts";

export const useAutomaticLogin = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const userMutation =  useMutation({
		mutationFn: (user) => userAuthentication(user),
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

			removeLoginOfLocalStorage();
		},
		onSuccess: (data) => {
			const url = router.pathname === PATH.login
				? PATH.cars
				: router.path;

			dispatch(login(data));
			router.push(url);
		},
	});

	useEffect(() => {
		const userData = getLoginOfLocalStorage();

		if (userData.user_id && userData.token) {
			userMutation.mutate(userData);
		}
	}, []);  

	return {
		isLoading: userMutation.isLoading,
	};
};