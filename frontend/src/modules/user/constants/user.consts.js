export const USER_QUERY_KEYS = {
  all: ["user"],
  lists: () => [...USER_QUERY_KEYS.all, "list"],
  list: (filters) => [...USER_QUERY_KEYS.lists(), { filters }],
};
