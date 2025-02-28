import { LOCALSTORAGE_USER_ID, LOCALSTORAGE_USER_TOKEN } from "@common/constants/settings.conts";

import {
  getItemLocalStorage,
  removeItemLocalStorage,
  setItemLocalStorage,
} from "@common/utils/local_storage.utils";

//? login cookies.
export const getLoginOfLocalStorage = () => {
	const userId = getItemLocalStorage(LOCALSTORAGE_USER_ID);
	const userToken = getItemLocalStorage(LOCALSTORAGE_USER_TOKEN);

	return { 
		user_id: userId,
		token: userToken,
	};
};

export const removeLoginOfLocalStorage = () => {
	removeItemLocalStorage(LOCALSTORAGE_USER_ID);
	removeItemLocalStorage(LOCALSTORAGE_USER_TOKEN);
};

export const setLoginOfLocalStorage = (user) => {
	setItemLocalStorage(LOCALSTORAGE_USER_ID, user.id);
	setItemLocalStorage(LOCALSTORAGE_USER_TOKEN, user.token);
};