export const CLIENT_QUERY_KEYS = {
  all: ["client"],
  lists: () => [...CLIENT_QUERY_KEYS.all, "list"],
  list: (filters) => [...CLIENT_QUERY_KEYS.lists(), { filters }],
  detail: (id) => [...CLIENT_QUERY_KEYS.all, "detail", id],
};
