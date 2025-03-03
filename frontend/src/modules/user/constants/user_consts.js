export const USER_QUERY_KEYS = {
  all: ["user"],
  detail: (id, filters) => [...USER_QUERY_KEYS.all, "detail", id, { filters }],
  lists: () => [...USER_QUERY_KEYS.all, "list"],
  list: (filters) => [...USER_QUERY_KEYS.lists(), { filters }],
};
