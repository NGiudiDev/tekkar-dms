export const formatDate = (date) => {
	//? convert date in format YYYY-MM-DD.
	return date.toISOString().split("T")[0];
};

export const getYear = () => {
	const now = new Date();
	return now.getFullYear();
};
