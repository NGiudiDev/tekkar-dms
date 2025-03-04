export const getChangedFields = (modifiedObj, initialObj) => {
	const newObj = {};

	Object.keys(initialObj).forEach((field) => {
		if (initialObj[field] !== modifiedObj[field])
			newObj[field] = modifiedObj[field];
	});

	return newObj;
};

export const isEmptyObject = (obj) => {
	return Object.keys(obj).length === 0;
};