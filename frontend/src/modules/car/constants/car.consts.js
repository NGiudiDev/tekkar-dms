export const MIN_YEAR_PRODUCTION = 1886;

export const CAR_REGEXS = {
	AR_LICENSE_PLATE_V1: /[a-zA-Z]{3}[0-9]{3}/,	
	AR_LICENSE_PLATE_V2: /[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}/,
};

export const CAR_QUERY_KEYS = {
  all: ["car"],
  lists: () => [...CAR_QUERY_KEYS.all, "list"],
  list: (filters) => [...CAR_QUERY_KEYS.lists(), { filters }],
};
