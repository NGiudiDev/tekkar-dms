const localStorageConsoleError = () => {
	console.warn("Please enable cookie permissions for a better user experience.");
};

export const getItemLocalStorage = (key) => {
	try {
		return localStorage.getItem(key);
	} catch {
		localStorageConsoleError();
	}
};

export const removeItemLocalStorage = (key) => {
	try {
		localStorage.removeItem(key);
	} catch {
		localStorageConsoleError();
	}
};

export const setItemLocalStorage = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch {
		localStorageConsoleError();
	}
};