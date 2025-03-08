export const formatDate = (date) => {
	//? convert date in format YYYY-MM-DD.
	return date.toISOString().split("T")[0];
};

export const getDate = () => {
	const date = new Date();

	//? Argentina is in UTC-3 with no daylight saving time changes.
	//? 3 hours in milliseconds.
	const argentinaOffset = -3 * 60 * 60 * 1000;
	
	return new Date(date.getTime() + argentinaOffset);
};

export const getYear = () => {
	const now = getDate();
	return now.getFullYear();
};