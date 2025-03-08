export const CLIENT_QUERY_KEYS = {
  all: ["client"],
  detail: (id, filters) => [...CLIENT_QUERY_KEYS.all, "detail", id, { filters }],
  lists: () => [...CLIENT_QUERY_KEYS.all, "list"],
  list: (filters) => [...CLIENT_QUERY_KEYS.lists(), { filters }],
};