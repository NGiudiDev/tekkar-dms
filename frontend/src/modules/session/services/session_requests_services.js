import { postAxios } from "@common/services/axios_services";
import {
	getLoginOfLocalStorage,
	removeLoginOfLocalStorage,
	setLoginOfLocalStorage,
} from "@session/services/session_local_storage_services";

export const userAuthentication = (data) => {
	return postAxios("/users/authentication", data);
};

export const userLogin = (data) => {
	return postAxios("/users/login", data)
		.then((res) => {
			setLoginOfLocalStorage(res.user);
			return res;
		});
};

export const userLogout = () => {
	const { user_id } = getLoginOfLocalStorage();

	const data = { user_id };

	return postAxios("/users/logout", data)
		.then(() => {
			removeLoginOfLocalStorage();
		});
};

export const userPasswordRecovery = (data) => {
	return postAxios("/users/password_recovery", data);
};

export const userPasswordUpdate = (data, token) => {
	const headers = { token };

	return postAxios("/users/new_password", data, headers);
};